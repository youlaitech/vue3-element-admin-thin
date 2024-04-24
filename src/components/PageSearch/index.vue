<template>
  <div class="search-container" v-hasPerm="[`${searchConfig.pageName}:query`]">
    <el-form ref="queryFormRef" :model="queryParams" :inline="true">
      <template v-for="item in searchConfig.formItems" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <template v-if="item.type === 'input'">
            <el-input
              v-model="queryParams[item.prop]"
              v-bind="item.attrs"
              @keyup.enter="handleQuery"
            />
          </template>
          <template v-if="item.type === 'select'">
            <el-select v-model="queryParams[item.prop]" v-bind="item.attrs">
              <template v-for="option in item.options" :key="option.value">
                <el-option :label="option.label" :value="option.value" />
              </template>
            </el-select>
          </template>
          <template v-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="queryParams[item.prop]"
              v-bind="item.attrs"
            />
          </template>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">
          <i-ep-search />搜索
        </el-button>
        <el-button @click="handleReset"><i-ep-refresh />重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// 定义接收的属性/自定义事件
interface IProps {
  searchConfig: {
    pageName: string;
    formItems: Array<{
      type: string;
      label: string;
      prop: string;
      attrs?: any;
      initialValue?: any;
      options?: { label: string; value: any }[];
    }>;
  };
}
const props = defineProps<IProps>();
const emit = defineEmits(["queryClick", "resetClick"]);

// 定义form的数据
const initialForm: any = {};
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? "";
}
const queryParams = reactive(initialForm);

// 重置操作
const queryFormRef = ref<InstanceType<typeof ElForm>>();
function handleReset() {
  queryFormRef.value?.resetFields();
  emit("resetClick");
}

function handleQuery() {
  emit("queryClick", queryParams);
}
</script>

<style lang="scss" scoped>
.search-container {
  padding: 18px 0 0 10px;
  margin-bottom: 10px;
  background-color: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
}
</style>

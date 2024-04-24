<template>
  <div class="app-container">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <el-card shadow="never" class="table-container"> list </el-card>
  </div>
</template>

<script setup lang="ts">
import searchConfig from "./config/search.config";

function handleQueryClick(queryParams: any) {
  console.log("query", queryParams);
}

function handleResetClick() {
  console.log("reset");
}
</script>

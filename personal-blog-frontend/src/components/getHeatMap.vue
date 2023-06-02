<template>
  <div class="AlibabaBold">
    <div ref="heat" class="about"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {getCurrentInstance, onMounted, ref} from "vue";

const { proxy } = getCurrentInstance()
let heat = ref(null)

function getVirtualData(year) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}

onMounted(() => {
  const myChart = proxy.$echarts.init(heat.value);
  myChart.setOption({
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: 16,
      range: '2016',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2016')
    }
  })
})
</script>

<style lang="less" scoped>
.about {
  width: 1000px;
  height: 280px;
}
</style>
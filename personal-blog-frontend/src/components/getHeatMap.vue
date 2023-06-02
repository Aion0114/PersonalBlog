<template>
  <div class="AlibabaBold" style="display: flex; justify-content: center">
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
      Math.floor(Math.random() * 250)
    ]);
  }
  return data;
}

onMounted(() => {
  const myChart = proxy.$echarts.init(heat.value);
  myChart.setOption({
    title: {
      top: 20,
      left: 'center',
      text: 'Website visits'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 500,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 55
    },
    calendar: {
      top: 110,
      left: 30,
      right: 30,
      cellSize: 20,
      range: '2016',
      splitLine: true,
      itemStyle: {
        borderWidth: 5,
        borderColor: '#fff'
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2016')
    },
    textStyle: {
      fontFamily: 'Alimama_ShuHeiTi_Bold'
    }
  })
})
</script>

<style lang="less" scoped>
.about {
  width: 1070px;
  height: 280px;
  margin-left: 20px;
}
</style>
<template>
  <Card
    title="NPS Atual"
    subtitle="Veja como está o NPS hoje"
    text="12345"
    nameContainer="container"
  />
</template>

<script>
import Card from "../Card";
import { mapState } from "vuex";
import Highcharts from "highcharts";
import _ from "lodash";

export default {
  name: "CardNPSNow",
  components: {
    Card,
  },
  computed: mapState({
    list: (state) => state.list,
  }),
  watch: {
    list() {
      this.dataSource();
    },
  },
  methods: {
    dataSource() {
      //const names = this.list.map((item) => item.name);
      //const clinics = this.list.map(item => item.clinic)
      //const states = this.list.map(item => item.state)
      const scores = this.list.map((item) => item.score);
      //const genders = this.list.map(item => item.gender)

      const base = _(scores)
        .countBy()
        .map((value, key) => ({ key, value }))
        .value();

      const categories = base.map((item) => item.key);

      const values = base.map((item) => item.value);

      this.setup({ categories, values });
    },
    setup(obj) {
      const { values } = obj;

      Highcharts.setOptions({
        colors: [
          "#05892D",
          "#FECD1A",
          "#EE1E1E",
        ],
      });

      Highcharts.chart("container", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          height: 300
        },
        title: {
          text: "",
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: values,
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>
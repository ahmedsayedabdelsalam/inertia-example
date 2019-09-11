<template>
  <layout>
    <!-- <el-row>
      <el-col :span="11" class="col-dashboard">
        <el-card>

        </el-card>
      </el-col>
      <el-col :span="8" class="col-dashboard">
        <el-card>

        </el-card>
      </el-col>
    </el-row>-->
    <b-row>
      <b-col>
        <b-card>
          <div>
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="70" status="warning"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <div>
            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </layout>
</template>

<script>
import Layout from "@/Layout/Layout";
import InfoBox from "./InfoBox";

export default {
  components: {
    Layout,
    InfoBox
  },
  props: {},
  data() {
    return {};
  },

  methods: {}
};
</script>

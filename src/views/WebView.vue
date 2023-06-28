<template>
  <a-card>
    {{ errormessage }}
    Content
  </a-card>
</template>
<script>
import AdressService from "../services/address.service.ts";
import {
  QuestionOutlined,
  ImportOutlined,
  InboxOutlined,
  PlusOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      fullpath: this.$route.fullPath,
      errormessage: "",
      msgsuccess: "",
    };
  },
  components: {
    QuestionOutlined,
    ImportOutlined,
    PlusOutlined,
    InboxOutlined,
    ArrowUpOutlined,
  },
  mounted() {
    this.$store.dispatch("login", this.$route.query);
  },
  computed: {
    pxerror() {
      return this.$store.getters.getPxError;
    },
    pxurl() {
      return this.$store.getters.getPxUrl;
    },
  },
  methods: {
    getAdressNrByName(customername) {
      AdressService.getAdressNrByName(customername)
        .then((resp) => {
          const customer = resp.data;
          if (customer.length > 0) {
            return customer[0];
          }
        })
        .catch(() => {
          return null;
        });
    },
    toHelp() {
      this.$router.push({ path: "/help" });
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

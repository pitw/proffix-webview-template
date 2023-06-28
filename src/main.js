import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "ant-design-vue/dist/antd.less"; // or 'ant-design-vue/dist/antd.less'

import {
  Layout,
  Button,
  Spin,
  Upload,
  Result,
  Progress,
  Card,
  Image,
  Alert,
  Divider,
  Collapse,
  CollapsePanel,
  Input,
  Col,
  Skeleton,
  Select,
  Row,
  Drawer,
  Statistic,
  DatePicker,
  Form,
  PageHeader,
  RangePicker,
  Transfer,
  InputNumber,
  Table,
  Tag,
} from "ant-design-vue";

import "ant-design-vue/dist/antd.less";

const app = createApp(App);

app.use(router);
app.config.productionTip = false;
app.use(Layout);
app.use(Skeleton);
app.use(Upload);
app.use(Select);
app.use(Input);
app.use(Progress);
app.use(RangePicker);
app.use(DatePicker);
app.use(Button);
app.use(Collapse);
app.use(Alert);
app.use(Image);
app.use(CollapsePanel);
app.use(PageHeader);
app.use(Spin);
app.use(Result);
app.use(Statistic);
app.use(Transfer);
app.use(Table);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(store);
app.mount("#app");

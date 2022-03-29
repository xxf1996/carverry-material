import HelloDemo from '../materials/hello-demo/HelloDemo.vue';
import { basicTemplate, getComponentPropInfo } from './tool';

type HelloDemoProps = InstanceType<typeof HelloDemo>['$props'];

export default {
  title: 'test/HelloDemo',
  component: HelloDemo,
  argTypes: getComponentPropInfo(HelloDemo.props, HelloDemo['__docgenInfo']),
};

const Template = basicTemplate<HelloDemoProps>(HelloDemo);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = '基本使用';

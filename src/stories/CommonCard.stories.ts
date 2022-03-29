import CommonCard from '../materials/common-card/CommonCard.vue';
import { basicTemplate, getComponentPropInfo } from './tool';

type CommonCardProps = InstanceType<typeof CommonCard>['$props'];

export default {
  title: 'test/CommonCard',
  component: CommonCard,
  argTypes: getComponentPropInfo(CommonCard.props, CommonCard['__docgenInfo']),
};

const Template = basicTemplate<CommonCardProps>(CommonCard);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = '基本使用';

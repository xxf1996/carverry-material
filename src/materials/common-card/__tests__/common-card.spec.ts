import { describe, it, assert } from 'vitest';
import { mount } from '@vue/test-utils';
import CommonCard from '@/materials/common-card';

describe('common-card组件', () => {
  it('默认值', () => {
    const wrapper = mount(CommonCard);
    const header = wrapper.find('.el-card__header>h5');
    assert.isTrue(header.exists());
    assert.equal(header.text(), '卡片标题');
  });
  it('title', () => {
    const wrapper = mount(CommonCard, {
      props: {
        title: '测试',
      },
    });
    const header = wrapper.find('.el-card__header>h5');
    assert.isTrue(header.exists());
    assert.equal(header.text(), '测试');
  });
});

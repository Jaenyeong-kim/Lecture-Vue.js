// import Vue from 'vue';
import LoginForm from './LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

const factory = (values) => 
    shallowMount(LoginForm, {
        data() {
            return values;
        }
    });


describe('LoginForm.vue', () => {
    test('페이지가 뜨면 화면이 그려짐', () => {
        const wrapper = shallowMount(LoginForm);
        const form = wrapper.find('form');
        console.log(wrapper.vm);
        expect(wrapper.vm).not.toBeFalsy();
        // var vm = new Vue({
        //     render: h => h(LoginForm)
        // }).$mount();
        // expect(vm).not.toBeFalsy();
    });

    test('이메일 형식이 아니면 에러 문구 표시', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test'
                }
            }
        });
        //error-message
        const errorMessage = wrapper.find('.error-message').text();
        expect(errorMessage).toBe('invalid username');

        // const input = wrapper.find('#username');
        // const firstInputValue = input.element.value;
        // expect(firstInputValue).toBe('test');
    });

    test('이메일과 패스워드가 입력되지 않으면 버튼을 클릭할 수 없음', () => {
        const wrapper = factory({ username: 'test@test.com', password: '1234'});
        const buttonWrapper = wrapper.find('button');
        const isDisabled = buttonWrapper.element.disabled;
        expect(isDisabled).toBeFalsy();

        // const inputs = wrapper.findAll('input');
        // inputs.at(0);
    });

});
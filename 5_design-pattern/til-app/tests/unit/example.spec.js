function sum(a, b) {
  return a + b;
}

sum(10, 20); // 30

describe('example.spec.js', () => {
  test('sum 함수 테스트', () => {
    // const test = true;
    // expect(test).toBe(true);
    const result = sum(10, 20);
     expect(result).toBe(30);
  } );
});

// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

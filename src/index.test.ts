import {sayHello} from "@/index";

describe('test hello', () => {
  it('should success', () => {
    const data = sayHello();
    expect(data).toEqual("cut!hit!")
  });
});

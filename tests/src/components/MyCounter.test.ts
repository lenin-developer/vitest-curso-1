import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('render props', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    const textProps = wrapper.find('h3').text();
    expect(textProps).toContain(`Counter: ${value}`);
  });

  test('event incremen', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');

    const [h3Conter, h3Square] = wrapper.findAll('h3');


    const newConter = value + 1;
    const newSquare = newConter * newConter;

    expect(h3Conter.text()).toContain(`Counter: ${newConter}`);
    expect(h3Square.text()).toContain(`Square: ${newSquare}`);
  });


  test('event decrement', async () => { 
    const value = 5;
    const wrapper = mount(MyCounter, {
        props: {
            value
        }
    })

    const [_,btnDecrement] = wrapper.findAll('button');
     await btnDecrement.trigger('click');

    const [h3Counter, h3Square] = wrapper.findAll('h3');
    
    const newCounter = value - 1;
    const newSquare = newCounter * newCounter;
    expect(h3Counter.text()).toContain(`Counter: ${newCounter}`)
    expect(h3Square.text()).toContain(`Square: ${newSquare}`)



   })

});

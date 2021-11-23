import React from 'react';
import TextField from './TextField';

import Task from './TextField';

export default {
    component : TextField,
    title: 'TextField'
};


const Template = args => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
    textfield: {
        id : '1',
        
    },

};




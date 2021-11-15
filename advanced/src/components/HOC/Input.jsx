import React from 'react';
import withLoading from './withLoading';

const Input = () => <input defaultValue="Input" />;

export default withLoading(Input);

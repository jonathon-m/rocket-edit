export interface BaseConfig {
    type: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    title?: string;
}

export interface RegexTest {
    pattern?: RegExp;
}

export interface TextConfig extends BaseConfig, RegexTest {
    minlength?: number;
    maxlength?: number;
}

export interface SelectConfig extends BaseConfig {
    options: [];
}

export interface NumberConfig extends BaseConfig {
    min: number;
    max: number;
    step: any;
}

export interface GlobalConfig extends TextConfig, SelectConfig, NumberConfig, RegexTest { }
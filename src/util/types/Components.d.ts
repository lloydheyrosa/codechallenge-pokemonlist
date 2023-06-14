import {
    StyleProp,
    ViewStyle,
} from 'react-native';

declare type ComponentProps = {
    containerStyle?: StyleProp<ViewStyle> | undefined,
}

declare type ButtonProps = ComponentProps & {
    text?: string | undefined,
    icon?: React.FC<SvgProps> | undefined,
    onPress?(): void | null
}
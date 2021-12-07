type Colors = {
  MainBackground: string
  KeypadBackground: string
  ButtonBackground: string
  SliderBackground: string
  ScreenBackground: string
  TextColor: string
  BaseKeyBackground: string
  BaseKeyShadow: string
  RemovalKeyBackground: string
  RemovalKeyShadow: string
  EqualKeyBackground: string
  EqualKeyShadow: string
  DarkText: string
  SpecialText?: string
}

export const ColorList: Colors[] = [
  {
    MainBackground: 'hsl(222, 26%, 31%)',
    ScreenBackground: 'hsl(224, 36%, 15%)',
    KeypadBackground: 'hsl(223, 31%, 20%)',
    ButtonBackground: 'hsl(6, 63%, 50%)',
    SliderBackground: 'hsl(223, 31%, 20%)',
    TextColor: 'white',
    BaseKeyBackground: 'hsl(30, 25%, 89%)',
    BaseKeyShadow: 'hsl(28, 16%, 65%)',
    RemovalKeyBackground: 'hsl(225, 21%, 49%)',
    RemovalKeyShadow: 'hsl(224, 28%, 35%)',
    EqualKeyBackground: 'hsl(6, 63%, 50%)',
    EqualKeyShadow: 'hsl(6, 70%, 34%)',
    DarkText: 'hsl(221, 14%, 31%)',
  },
  {
    MainBackground: 'hsl(0, 0%, 90%)',
    ScreenBackground: 'hsl(0, 0%, 93%)',
    KeypadBackground: 'hsl(0, 5%, 81%)',
    ButtonBackground: 'hsl(25, 98%, 40%)',
    SliderBackground: 'hsl(0, 5%, 81%)',
    TextColor: 'hsl(60, 10%, 19%)',
    BaseKeyBackground: 'hsl(45, 7%, 89%)',
    BaseKeyShadow: 'hsl(35, 11%, 61%)',
    RemovalKeyBackground: 'hsl(185, 42%, 37%)',
    RemovalKeyShadow: 'hsl(185, 58%, 25%)',
    EqualKeyBackground: 'hsl(25, 98%, 40%)',
    EqualKeyShadow: 'hsl(25, 99%, 27%)',
    DarkText: 'hsl(60, 10%, 19%)',
  },
  {
    MainBackground: 'hsl(268, 75%, 9%)',
    ScreenBackground: 'hsl(268, 71%, 12%)',
    KeypadBackground: 'hsl(268, 71%, 12%)',
    ButtonBackground: 'hsl(176, 100%, 44%)',
    SliderBackground: 'hsl(268, 71%, 12%)',
    TextColor: 'hsl(52, 100%, 62%)',
    BaseKeyBackground: 'hsl(268, 47%, 21%)',
    BaseKeyShadow: 'hsl(290, 70%, 36%)',
    RemovalKeyBackground: 'hsl(281, 89%, 26%)',
    RemovalKeyShadow: 'hsl(285, 91%, 52%)',
    EqualKeyBackground: 'hsl(176, 100%, 44%)',
    EqualKeyShadow: 'hsl(177, 92%, 70%)',
    SpecialText: 'hsl(198, 20%, 13%)',
    DarkText: 'hsl(52, 100%, 62%)',
  },
]

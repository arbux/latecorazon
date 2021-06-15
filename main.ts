let Salida_Analoga = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, Salida_Analoga)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (Salida_Analoga > 1023) {
        Salida_Analoga = 0
    }
    Salida_Analoga += 50
})

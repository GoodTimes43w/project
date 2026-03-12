maqueenPlusV2.I2CInit()
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
basic.pause(2500)
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
basic.pause(1000)
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 10)
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 10)
basic.pause(8508)
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
music.play(music.stringPlayable("C5 - B - A - G E ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    let DetectBlock = 0
    if (DetectBlock) {
    	
    } else {
    	
    }
})

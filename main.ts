maqueenPlusV2.I2CInit()
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 25)
basic.pause(3000)
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)

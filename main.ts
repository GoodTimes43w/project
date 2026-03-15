let Turn_angle = 0
let CurrentPos00 = 0
let Block_Pos_x = 0
let Block_Pos_y = 0
maqueenPlusV2.I2CInit()
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
basic.pause(2500)
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
basic.pause(1000)
let StartDetection = true
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 25)
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 25)
basic.pause(3800)
basic.forever(function () {
    if (StartDetection) {
        huskylens.initI2c()
        huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
        huskylens.writeName(1, "Red")
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
            Block_Pos_y = huskylens.readeBox(1, Content1.xCenter)
            Block_Pos_x = huskylens.readeBox(1, Content1.yCenter)
        }
    }
})
basic.forever(function () {
    CurrentPos00 = 0
})
basic.forever(function () {
    Turn_angle = CurrentPos00 - Block_Pos_x
})
basic.forever(function () {
    if (Turn_angle < 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    }
})
basic.forever(function () {
    if (Turn_angle > 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    }
})
basic.forever(function () {
    matrixLidarDistance.initialize(matrixLidarDistance.Addr.Addr4, matrixLidarDistance.Matrix.OBS)
    matrixLidarDistance.setObstacleDistance(200)
    matrixLidarDistance.getData()
    if (matrixLidarDistance.obstacleSuggestion() == 1) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
})
basic.forever(function () {
    if (Turn_angle == 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
})

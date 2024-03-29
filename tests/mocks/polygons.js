module.exports = {
    polygonWithLoop: {
        type: "Polygon",
        coordinates: [
            [
                [
                    -45.3076171875,
                    -7.297087564171992
                ],
                [
                    -44.6923828125,
                    -10.09867012060338
                ],
                [
                    -41.55029296875,
                    -8.341953075466805
                ],
                [
                    -46.86767578125,
                    -8.515835561202218
                ],
                [
                    -45.3076171875,
                    -7.297087564171992
                ]
            ]
        ]
    },

    polygonWithoutLoop: {
        type: "Polygon",
        coordinates: [
            [
                [
                    -28.564453125,
                    -14.519780046326085
                ],
                [
                    -30.05859375,
                    -19.808054128088575
                ],
                [
                    -20.7421875,
                    -19.72534224805787
                ],
                [
                    -21.09375,
                    -14.859850400601037
                ],
                [
                    -28.564453125,
                    -14.519780046326085
                ]
            ]
        ]
    },

    polygonWithInvalidCoordinates: {
        type: "Polygon",
        coordinates: []
    },

    polygonWithInvalidCoordinatesQuantity: {
        type: "Polygon",
        coordinates: [
            [
                [1, 1],
                [1, 1]
            ]
        ]
    }
}


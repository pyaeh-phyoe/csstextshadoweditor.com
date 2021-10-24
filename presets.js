/*const TEXTSHADOWS = [{
    "color": "#FFFFFF",
    "background": "#232323",

    "text-shadow": "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18",
    "text": "Neon"
}, {
    "color": "#FFFFFF",
    "background": "#333333",
    "text-shadow": "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00",
    "text": "Flaming"
}, {
    "color": "#131313",
    "background": "#e7e5e4",
    "letter-spacing": ".15em",
    "text-shadow": "1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2",
    "text": "Lux"
}, {
    "color": "#444444",
    "background": "#FFFFFF",
    "text-shadow": "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
    "text": "Smooth"
}, {
    "color": "#FFFFFF",
    "background": "#b8b8b8",
    "text-shadow": "4px 3px 0 #7A7A7A",
    "text": "Retro"
}, {
    "color": "#FFFFFF",
    "background": "#912C22",
    "text-shadow": "0 0 10px #FFFFFF",
    "text": "Glowing"
}, {
    "color": "#d9d9d9",
    "background": "#e8e8e8",
    "text-shadow": "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
    "text": "Tactile"
}, {
    "color": "#333333",
    "background": "#FFFFFF",
    "text-shadow": "2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)",
    "text": "News"
}, {
    "color": "#FFFFFF",
    "background": "#F7C1C1",
    "text-shadow": "4px 3px 0px #7A7A7A",
    "text": "Candy"
}, {
    "color": "#FFFFFF",
    "background": "#ece9e9",
    "text-shadow": "3px 5px 2px #474747",
    "text": "Floating"
}, {
    "color": "#000000",
    "background": "#FFFFFF",
    "text-shadow": "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
    "text": "80's"
}, {
    "color": "#FFFFFF",
    "background": "#FFFFFF",
    "text-shadow": "1px 3px 0 #969696, 1px 13px 5px #aba8a8",
    "text": "Distant"
}, {
    "color": "#FFFFFF",
    "background": "#FFFFFF",
    "text-shadow": "2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5",
    "text": "Outline"
}, {
    "color": "#A7DD3C",
    "background": "#FFFFFF",
    "text-shadow": "2px 0 0px #800040, 3px 2px 0px rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 17px 2px 45px rgba(38,77,0,0.5)",
    "text": "Love"
}, {
    "color": "#616161",
    "background": "#bababa",
    "text-shadow": "#e0e0e0 1px 1px 0",
    "text": "Inset"
}, {
    "color": "#FFFFFF",
    "background": "#0e8dbc",
    "text-shadow": "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
    "text": "Blocks"
}, {
    "color": "#202c2d",
    "background": "#FFFFFF",
    "text-shadow": "0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5",
    "text": "Grave"
}, {
    "color": "#FFFFFF",
    "background": "#996D6D",
    "text-shadow": "#474747 3px 5px 2px",
    "text": "Solid"
}, {
    "color": "#005900",
    "background": "#FFFCA8",
    "text-shadow": "#FFFCA8 2px 2px 0px, #9C9C9C 4px 4px 0px",
    "text": "Cartoon"
}, {
    "color": "#FFFFFF",
    "background": "#333333",
    "text-shadow": "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
    "text": "Vegas"
}, {
    "color": "#bc2e1e",
    "background": "#edde9c",
    "text-shadow": "0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd",
    "text": "Comic"
}, {
    "color": "#e0dfdc",
    "background": "#556677",
    "letter-spacing": ".1em",
    "text-shadow": "0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)",
    "text": "Deep"
}, {
    "color": "#e0eff2",
    "background": "#3a50d9",
    "font": "italic bold Georgia, Serif",
    "text-shadow": "-4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27",
    "text": "Mummy"
}, {
    "color": "#FFFFFF",
    "background": "#005DFF",
    "text-shadow": "-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd",
    "text": "Hero"
}, {
    "color": "#92a5de",
    "background": "#FF0000",
    "text-shadow": "0px 0px 0 #899CD5, 1px 1px 0 #8194CD, 2px 2px 0 #788BC4, 3px 3px 0 #6F82BB, 4px 4px 0 #677AB3, 5px 5px 0 #5E71AA, 6px 6px 0 #5568A1, 7px 7px 0 #4C5F98, 8px 8px 0 #445790, 9px 9px 0 #3B4E87, 10px 10px 0 #32457E, 11px 11px 0 #2A3D76, 12px 12px 0 #21346D, 13px 13px 0 #182B64, 14px 14px 0 #0F225B, 15px 15px 0 #071A53, 16px 16px 0 #02114A, 17px 17px 0 #0B0841, 18px 18px 0 #130039, 19px 19px 0 #1C0930, 20px 20px 0 #251227, 21px 21px 20px rgba(0,0,0,1), 21px 21px 1px rgba(0,0,0,0.5), 0px 0px 20px rgba(0,0,0,.2)",
    "text": "Dracula"
}, {
    "color": "rgba(25,255,255,.3)",
    "background": "#1a1a1a",
    "text-shadow": "0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)",
    "text": "Blurry"
}, {
    "color": "rgba(0,0,0.6)",
    "background": "#629552",
    "text-shadow": "2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)",
    "text": "Emboss"
}, {
    "color": "rgba(0,0,.6)",
    "background": "#6e6e6e",
    "text-shadow": "3px 2px 3px rgba(255,255,255,.2)",
    "text": "Press"
}, {
    "color": "transparent",
    "background-color": "#666666",

    "background-clip": "text",
    "text-shadow": "0px 3px 3px rgba(255,255,255,0.5)",
    "text": "Carve"
}, {
    "color": "transparent",
    "background": "#FFFFFF",
    "text-shadow": "-4px 4px rgba(179,179,179,.4), -3px 3px rgba(153,153,153,.2), -2px 2px rgba(179,179,179,.2), -1px 1px rgba(179,179,179,.2), 0px 0px rgba(128,128,128,.5), 1px -1px rgba(77,77,77,.6), 2px -2px rgba(77,77,77,.7), 3px -3px rgba(82,82,82,.8), 4px -4px rgba(77,77,77,.9), 5px -5px rgba(77,77,77,1)",
    "text": "Ghost"
}]
*/

const TEXTSHADOWS = [{"text":" Beautiful ","text-shadow":"2px 2px 0px rgb(255, 255, 255), 4px 4px 0px rgb(250, 189, 54)","color":"rgb(9, 10, 10)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"\"Dancing Script\"","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" PURPLE ","text-shadow":"","color":"rgb(128, 0, 128)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"\"Rampart One\"","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"400","text-decoration":"none"},{"text":" SPEED ","text-shadow":"2px 2px 0px rgb(255, 178, 0), 2px -2px 0px rgb(255, 178, 0), -2px 2px 0px rgb(255, 0, 0), -2px -2px 0px rgb(255, 0, 0), 2px 0px 0px rgb(255, 0, 0), 0px 2px 0px rgb(255, 0, 0), -2px 0px 0px rgb(255, 0, 0), 0px -2px 0px rgb(255, 0, 0)","color":"rgb(255, 255, 255)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"\"Faster One\"","letter-spacing":5,"word-spacing":"normal","font-style":"italic","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" DOUBLE ","text-shadow":"4px 4px 0px rgb(156, 156, 156)","color":"rgb(51, 51, 51)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"400","text-decoration":"none"},{"text":" Cartoon ","text-shadow":"2px 2px 0px rgb(255, 255, 255), 5px 4px 0px rgba(0, 0, 0, 0.15)","color":"rgb(51, 51, 51)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"Ranchers","letter-spacing":5,"word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" slime ","text-shadow":"0px 1px 0px rgb(55, 160, 180), 1px 0px 0px rgb(93, 171, 205), 1px 2px 1px rgb(55, 138, 180), 2px 1px 1px rgb(93, 171, 205), 2px 3px 2px rgb(55, 138, 180), 3px 2px 2px rgb(93, 171, 205), 3px 4px 2px rgb(55, 138, 180), 4px 3px 3px rgb(93, 171, 205), 4px 5px 3px rgb(55, 138, 180), 5px 4px 2px rgb(93, 171, 205), 5px 6px 2px rgb(55, 138, 180), 6px 5px 2px rgb(93, 171, 205), 6px 7px 1px rgb(55, 138, 180), 7px 6px 1px rgb(93, 171, 205), 7px 8px 0px rgb(55, 138, 180), 8px 7px 0px rgb(93, 171, 205)","color":"rgb(125, 231, 51)","background-color":"rgb(8, 36, 2)","font-size":"32px","font-family":"Creepster","letter-spacing":5,"word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"400","text-decoration":"none"},{"text":" NIGHT ","text-shadow":"0px 0px 2px rgb(255, 255, 255), 0px 0px 4px rgb(255, 255, 255), 0px 0px 8px rgb(255, 255, 255), 0px 0px 12px rgb(73, 255, 24), 0px 0px 16px rgb(73, 255, 24), 0px 0px 20px rgb(73, 255, 24), 0px 0px 24px rgb(73, 255, 24), 0px 0px 28px rgb(73, 255, 24)","color":"rgb(255, 255, 255)","background-color":"rgb(35, 35, 35)","font-size":"32px","font-family":"Baumans","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Club ","text-shadow":"0px 0px 2px rgb(255, 255, 255), 0px 0px 4px rgb(255, 255, 255), 0px 0px 6px rgb(255, 255, 255), 0px 0px 8px rgb(255, 45, 149), 0px 0px 10px rgb(255, 45, 149), 0px 0px 12px rgb(255, 45, 149), 0px 0px 14px rgb(255, 45, 149), 0px 0px 16px rgb(255, 45, 149)","color":"rgb(255, 255, 255)","background-color":"rgb(51, 51, 51)","font-size":"30px","font-family":"Parisienne","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" 8 Bit ","text-shadow":"5px 5px 0px rgb(255, 0, 0)","color":"rgb(255, 255, 0)","background-color":"rgb(58, 106, 248)","font-size":"32px","font-family":"\"Press Start 2P\"","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" WOOPS ! ","text-shadow":"4px 2px 0px rgb(113, 209, 30)","color":"rgb(113, 209, 30)","background-color":"rgb(0, 0, 0)","font-size":"32px","font-family":"\"Bungee Hairline\"","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" 1980 ","text-shadow":"2px 2px 0px rgb(188, 188, 188), 4px 4px 0px rgb(156, 156, 156)","color":"rgb(0, 0, 0)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" clean ","text-shadow":"2px 2px 0px rgb(64, 116, 181), 2px -2px 0px rgb(64, 116, 181), -2px 2px 0px rgb(64, 116, 181), -2px -2px 0px rgb(64, 116, 181), 2px 0px 0px rgb(64, 116, 181), 0px 2px 0px rgb(64, 116, 181), -2px 0px 0px rgb(64, 116, 181), 0px -2px 0px rgb(64, 116, 181)","color":"rgb(255, 255, 255)","background-color":"rgb(255, 255, 255)","font-size":"32px","font-family":"Quantico","letter-spacing":5,"word-spacing":"normal","font-style":"italic","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Flaming ","text-shadow":"0px -1px 4px rgb(255, 255, 255), 0px -2px 10px rgb(255, 255, 0), 0px -10px 20px rgb(255, 128, 0), 0px 0px 40px rgb(255, 0, 0)","color":"rgb(255, 255, 255)","background-color":"rgb(51, 51, 51)","font-size":"31px","font-family":"Quintessential","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Handwriting ","text-shadow":"2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3)","color":"rgb(0, 0, 1)","background-color":"rgb(98, 149, 82)","font-size":"32px","font-family":"\"Reenie Beanie\"","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Candy ","text-shadow":"3px 2px 0px rgb(242, 203, 221), 4px 4px 0px rgb(236, 107, 170), 5px 6px 0px rgb(231, 83, 129)","color":"rgb(255, 255, 255)","background-color":"rgb(247, 193, 193)","font-size":"32px","font-family":"'Petit Formal Script'","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Hero ","text-shadow":"-5px 5px 0px rgb(0, 230, 230), -10px 10px 0px rgb(1, 204, 204), -15px 15px 0px rgb(0, 189, 189)","color":"rgb(255, 255, 255)","background-color":"rgb(0, 93, 255)","font-size":"31px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" BOOM ","text-shadow":"2px 2px 0px rgb(229, 97, 47), 5px 4px 0px rgb(27, 27, 75)","color":"rgb(254, 219, 56)","background-color":"rgb(240, 161, 51)","font-size":"32px","font-family":"Ranchers","letter-spacing":12,"word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Perfect ","text-shadow":"1px 1px 0px rgb(0, 0, 0), 2px 2px 0px rgb(0, 0, 0), 3px 3px 0px rgb(0, 0, 0), 4px 4px 0px rgb(0, 0, 0), 5px 5px 0px rgb(219, 110, 220)","color":"rgb(255, 255, 255)","background-color":"rgb(99, 4, 108)","font-size":"32px","font-family":"Fasthand","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":400,"text-decoration":"none"},{"text":" Vegetable ","text-shadow":"-3px -3px 0px rgb(255, 255, 255), -2px -2px 0px rgb(255, 255, 255), -1px -1px 0px rgb(255, 255, 255), 1px 1px 0px rgb(255, 255, 255), 2px 2px 0px rgb(255, 255, 255), 3px 3px 0px rgb(255, 255, 255)","color":"rgb(116, 220, 95)","background-color":"rgb(151, 245, 146)","font-size":"32px","font-family":"\"Dancing Script\"","letter-spacing":6,"word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" CUTE ","text-shadow":"-1px -1px 0px rgb(231, 119, 241), 1px 1px 0px rgb(231, 119, 241), 2px 2px 0px rgb(156, 78, 160), 3px 3px 0px rgb(156, 78, 160), 4px 4px 0px rgb(156, 78, 160), 5px 5px 0px rgb(156, 78, 160)","color":"rgb(253, 239, 78)","background-color":"rgb(94, 226, 242)","font-size":"32px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Inset ","text-shadow":"1px 1px 0px rgb(224, 224, 224)","color":"rgb(97, 97, 97)","background-color":"rgb(186, 186, 186)","font-size":"32px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Grave ","text-shadow":"0px 1px 0px rgb(128, 141, 147), -1px 0px 0px rgb(205, 210, 213), -1px 2px 0px rgb(128, 141, 147), -2px 1px 0px rgb(205, 210, 213), -2px 3px 0px rgb(128, 141, 147), -3px 2px 0px rgb(205, 210, 213), -3px 4px 0px rgb(128, 141, 147), -4px 3px 0px rgb(205, 210, 213), -4px 5px 0px rgb(128, 141, 147), -5px 4px 0px rgb(205, 210, 213), -5px 6px 0px rgb(128, 141, 147), -6px 5px 0px rgb(205, 210, 213), -6px 7px 0px rgb(128, 141, 147), -7px 6px 0px rgb(205, 210, 213), -7px 8px 0px rgb(128, 141, 147), -8px 7px 0px rgb(205, 210, 213)","color":"rgb(32, 44, 45)","background-color":"rgb(255, 255, 255)","font-size":"31px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"},{"text":" Smooth ","text-shadow":"1px 0px 1px rgb(204, 204, 204), 0px 1px 1px rgb(238, 238, 238), 2px 1px 1px rgb(204, 204, 204), 1px 2px 1px rgb(238, 238, 238), 3px 2px 1px rgb(204, 204, 204), 2px 3px 1px rgb(238, 238, 238), 4px 3px 1px rgb(204, 204, 204), 3px 4px 1px rgb(238, 238, 238), 5px 4px 1px rgb(204, 204, 204), 4px 5px 1px rgb(238, 238, 238), 6px 5px 1px rgb(204, 204, 204), 5px 6px 1px rgb(238, 238, 238), 7px 6px 1px rgb(204, 204, 204)","color":"rgb(68, 68, 68)","background-color":"rgb(255, 255, 255)","font-size":"31px","font-family":"Roboto","letter-spacing":"normal","word-spacing":"normal","font-style":"normal","font-variant":"normal","text-transform":"none","font-weight":"700","text-decoration":"none"}]
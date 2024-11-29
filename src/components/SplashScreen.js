import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { WebView } from 'react-native-webview';

export default function SplashScreen() {
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnimation]);
    return (
        <WebView
            style={styles.container}
            source={{ html: template() }}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEnabled={false}
        />);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#CFEBB8"
    },
  });

export const template = () => `<!doctype html>
<head>
    <style>
        @keyframes showTopText {
            0% {
                transform: translate3d(0, 100%, 0);
            }
            40%, 60% {
                transform: translate3d(0, 50%, 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
            }
        }
        @keyframes showBottomText {
            0% {
                transform: translate3d(0, -100%, 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
            }
        }
        @keyframes fadeOut {
            0% { opacity: 100; }
            100% { opacity: 0; }
        }

        .animated-title {
            color: "cornflowerblue";
            font-family: Roboto, Arial, sans-serif;
            height: 90vmin;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 90vmin;
        }

        .animated-title > div {
            height: 50%;
            overflow: hidden;
            position: absolute;
            width: 100%;
        }

        .animated-title > div div {
            font-size: 7vmin;
            padding: 1vmin 0;
            position: absolute;
        }

        .animated-title > div div span {
            display: block;
        }

        .animated-title > div.text-top {
            border-bottom: 0.5vmin solid #C5CAC1;
            top: 0;
        }

        .animated-title > div.text-top div {
            animation: showTopText 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            bottom: 0;
            transform: translate(0, 100%);
            color: floralwhite;
        }

        .animated-title > div.text-bottom {
            bottom: 0;
        }

        .animated-title > div.text-bottom div {
            animation: showBottomText 0.5s;
            animation-delay: 1.75s;
            animation-fill-mode: forwards;
            top: 0;
            transform: translate(0, -100%);
            color: cornflowerblue;
        }

        .animated-title {
            animation: fadeOut 2s;
            animation-delay: 3.5s;
        }
                
        body, .animated-title, div {
            background-color: "#E3F8C0"
        }
    </style>
</head>
<body>
    <div class="animated-title">
        <div class="text-top">
          <div>
            <span>You are</span>
            <span>one question away from a</span>
          </div>
        </div>
        <div class="text-bottom">
          <div>More Exciting Life!</div>
        </div>
    </div>
</body>`;
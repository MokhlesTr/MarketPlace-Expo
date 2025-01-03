import * as React from "react"
import Svg, { Path, G, Circle, Defs, ClipPath, Rect, Ellipse, Pattern, Image } from "react-native-svg"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export const TabHomeIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("6%")} height={hp("6%")} viewBox="0 0 25.332 25.32">
        <G opacity={opacity} fill={color}>
            <Path
                data-name="Trac\xE9 32156"
                d="M194.542 319.841a2.542 2.542 0 00-2.542 2.542v5.083h5.083v-5.083a2.542 2.542 0 00-2.541-2.542z"
                transform="translate(0 -.16) translate(-184.375 -306.986)"
            />
            <G data-name="Groupe 20504">
                <Path
                    data-name="Trac\xE9 32157"
                    d="M14.4 15.4v5.083h3.389a2.542 2.542 0 002.542-2.542v-7.73a1.694 1.694 0 00-.477-1.179l-7.2-7.783a3.389 3.389 0 00-4.787-.189q-.1.091-.189.189L.492 9.029A1.694 1.694 0 000 10.223v7.714a2.542 2.542 0 002.542 2.542H5.93V15.4a4.236 4.236 0 118.472 0z"
                    transform="translate(0 -.16) translate(0 .16) translate(0 -.16)"
                />
                <Path
                    data-name="Trac\xE9 32158"
                    d="M194.542 319.841a2.542 2.542 0 00-2.542 2.542v5.083h5.083v-5.083a2.542 2.542 0 00-2.541-2.542z"
                    transform="translate(0 -.16) translate(0 .16) translate(-184.375 -307.146)"
                />
            </G>
        </G>
    </Svg>
)

export const TabPropertyIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 18.481 22.159">
        <Path
            d="M37.114 2.766a9.226 9.226 0 00-13.108 12.986l.084.084 3.31 3.054a4.564 4.564 0 006.368.017l3.348-3.094a9.226 9.226 0 000-13.047zm-1.491 8.62a2.1 2.1 0 01-2.1 2.1h-5.868a2.1 2.1 0 01-2.1-2.1V8.558A2.516 2.516 0 0126.64 6.49l2.516-1.745a2.523 2.523 0 012.868 0L34.54 6.49a2.516 2.516 0 011.082 2.067zm-1.678-2.828v2.828a.419.419 0 01-.419.419h-1.258v-1.677a.839.839 0 00-.839-.839h-1.677a.839.839 0 00-.839.839v1.677h-1.258a.419.419 0 01-.419-.419V8.558a.839.839 0 01.361-.689l2.516-1.745a.844.844 0 01.956 0l2.516 1.745a.839.839 0 01.36.689z"
            transform="translate(-21.334 -.033)"
            fill={color}
            opacity={opacity}
        />
    </Svg>
)

export const TabSearchIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 20.142 20.012">
        <Path
            d="M5.876 20.065a3.835 3.835 0 01-.442-.1l-2.408-.755A4.208 4.208 0 010 15.178V5.045a4.2 4.2 0 015.809-3.871l.067.031zM17.359.988l-.018-.006-2.279-.755a4.156 4.156 0 00-.792-.174v18.686l1.724.5a3.358 3.358 0 004.152-3.262V4.941A4.205 4.205 0 0017.359.988zm-4.768-.82s-4.9 1.4-5.036 1.419v18.466c.084-.018 5.036-1.373 5.036-1.373z"
            transform="translate(-.004 -.053)"
            fill={color}
            opacity={opacity}
        />
    </Svg>
)

export const TabDocumentIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 20.016 20.012">
        <G opacity={0.999}>
            <Path
                data-name="Trac\xE9 32159"
                d="M15.843 0H4.169A4.169 4.169 0 000 4.169a2.5 2.5 0 002.5 2.5h15.01a2.476 2.476 0 002.5-2.316A4.173 4.173 0 0015.843 0z"
                fill={color}
                opacity={opacity}
            />
            <Path
                data-name="Trac\xE9 32160"
                d="M18.51 10H1.834a.834.834 0 00-.834.834V17.5a4.174 4.174 0 004.169 4.169h10.006a4.174 4.174 0 004.169-4.169v-6.666A.834.834 0 0018.51 10zm-5.837 4.169h-5a.834.834 0 110-1.668h5a.834.834 0 110 1.668z"
                transform="translate(-.166 -1.662)"
                fill={color}
                opacity={opacity}
            />
        </G>
    </Svg>
)

export const TabServiceIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 20 20">
        <G data-name="Groupe 20315" transform="translate(-352 -82)" opacity={opacity} fill={color}>
            <Rect data-name="Rectangle 5418" width={4} height={4} rx={1.2} transform="translate(352 82)" />
            <Rect data-name="Rectangle 5423" width={4} height={4} rx={1.2} transform="translate(352 90)" />
            <Rect data-name="Rectangle 5426" width={4} height={4} rx={1.2} transform="translate(352 98)" />
            <Rect data-name="Rectangle 5419" width={4} height={4} rx={1.2} transform="translate(360 82)" />
            <Rect data-name="Rectangle 5422" width={4} height={4} rx={1.2} transform="translate(360 90)" />
            <Rect data-name="Rectangle 5425" width={4} height={4} rx={1.2} transform="translate(360 98)" />
            <Rect data-name="Rectangle 5420" width={4} height={4} rx={1.2} transform="translate(368 82)" />
            <Rect data-name="Rectangle 5421" width={4} height={4} rx={1.2} transform="translate(368 90)" />
            <Rect data-name="Rectangle 5424" width={4} height={4} rx={1.2} transform="translate(368 98)" />
        </G>
    </Svg>
)

export const TabNewsIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 -2 22 22">
        <Path
            fill={color}
            d="M20.193 1.058a4.548 4.548 0 0 0-3.781-.972l-1.6.393a3.638 3.638 0 0 0-2.983 3.579v14.069a6.284 6.284 0 0 1-1.819 0V4.058A3.621 3.621 0 0 0 7.071.489l-1.7-.415A4.548 4.548 0 0 0 0 4.548v9.817a4.548 4.548 0 0 0 3.734 4.475l5.718 1.04a8.187 8.187 0 0 0 2.927 0l5.721-1.04a4.548 4.548 0 0 0 3.729-4.474V4.548a4.533 4.533 0 0 0-1.637-3.49Z"
            opacity={opacity}
        />
    </Svg>
)

export const TabInquiriesIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 16 16">
        <G fill={color} opacity={opacity}>
            <Path
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                data-name="Trac\xE9 37911"
            />
        </G>
    </Svg>
)

export const TabLoginIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("5%")} height={hp("5%")} viewBox="0 0 20 20">
        <G fill={color} opacity={opacity} transform="translate(-64 -.476)">
            <Circle cx={4.958} cy={4.958} r={4.958} data-name="Ellipse 500" transform="translate(66.615 .476)" />
            <Path d="M71.573 12.074A7.581 7.581 0 0 0 64 19.647a.841.841 0 0 0 .841.841H78.3a.841.841 0 0 0 .841-.841 7.581 7.581 0 0 0-7.568-7.573Z" data-name="Trac\xE9 37910" />
        </G>
    </Svg>
)
export const TabStoreIcon = ({ color, opacity }: { color: string; opacity: number }) => (
    <Svg width={wp("6%")} height={hp("4.5%")} viewBox="0 0 24 27">
        <Path
            d="M2.067 24.68A2.049 2.049 0 010 22.615V9.594a2.05 2.05 0 012.067-2.067h2.507a4.962 4.962 0 011.5-3.644 4.962 4.962 0 013.644-1.5 4.962 4.962 0 013.644 1.5 4.962 4.962 0 011.5 3.644h2.507a2.05 2.05 0 012.067 2.068v13.02a2.053 2.053 0 01-2.067 2.067L2.067 24.68zm7.653-9.148a5.129 5.129 0 005.146-5.146h-1.715a3.417 3.417 0 01-3.43 3.43 3.415 3.415 0 01-3.432-3.43H4.574a5.13 5.13 0 005.146 5.146zM6.29 7.527h6.861a3.416 3.416 0 00-3.43-3.432 3.417 3.417 0 00-3.432 3.432z"
            fill={color}
            opacity={opacity}
        />
        <G opacity={opacity} clipPath="url(#clip0_1161_2)">
            <Path
                d="M24.715 9.821h0a.432.432 0 01-.249.559h0l-.005.002-2.01.819-.143.057-.013.153-.17 2.013h0l-.001.013a.468.468 0 01-.145.324.432.432 0 01-.356.057l-.008-.002-.009-.002-2.147-.443-.14-.03-.095.106-1.398 1.536h0l-.002.002a.431.431 0 01-.648 0h0l-.002-.002-1.398-1.536-.096-.105-.14.029-2.146.443-.009.002-.008.002a.432.432 0 01-.356-.057.468.468 0 01-.145-.324h0v-.013l-.171-2.013-.013-.153-.142-.057-2.011-.82h0l-.005-.001a.42.42 0 01-.068-.034h0a.433.433 0 01-.15-.589l1.155-1.734.092-.139-.092-.138-1.157-1.737a.433.433 0 01-.041-.365h0l.002-.007a.364.364 0 01.242-.243l.011-.003.011-.005 2.01-.818.143-.058.013-.153.17-2.013h0l.001-.013a.467.467 0 01.145-.324.432.432 0 01.356-.057l.008.002.009.002 2.147.443.141.03.096-.108 1.389-1.56a.5.5 0 01.666 0l1.389 1.56.096.108.141-.03 2.147-.443.009-.002.008-.002a.432.432 0 01.356.057c.089.085.141.201.145.324h0v.013l.171 2.013.013.153.142.058 2.011.818.01.005.012.003a.364.364 0 01.242.243h0l.002.007a.433.433 0 01-.041.365l-1.157 1.737-.092.138.092.139 1.155 1.734a.43.43 0 01.031.064z"
                fill={color}
                opacity={opacity}
                stroke="#fff"
                strokeWidth={0.5}
            />
        </G>
        <G clipPath="url(#clip1_1161_2)">
            <Path
                d="M23.377 9.263l-.92-1.38.92-1.382a.542.542 0 00.054-.46.488.488 0 00-.325-.326l-1.598-.65-.135-1.598a.57.57 0 00-.19-.406.542.542 0 00-.46-.081l-1.706.352-1.11-1.246a.596.596 0 00-.813 0l-1.11 1.246-1.707-.352a.543.543 0 00-.46.081.569.569 0 00-.19.406l-.136 1.598-1.597.65a.487.487 0 00-.325.325.542.542 0 00.054.46l.92 1.382-.92 1.381a.542.542 0 00.27.786l1.598.65.136 1.598a.569.569 0 00.19.406.542.542 0 00.46.081l1.706-.352 1.11 1.219a.541.541 0 00.813 0l1.11-1.219 1.707.352a.542.542 0 00.46-.081.57.57 0 00.19-.406l.135-1.598 1.598-.65a.542.542 0 00.271-.786zm-7.502.542l-1.138-.867-.297-.243h-.028l.163.379.46 1.083-.569.217-.947-2.33.568-.216 1.165.867.298.243a3.176 3.176 0 00-.163-.352l-.433-1.11.569-.244.948 2.33-.596.243zm.894-.352l-.948-2.356 1.787-.705.19.488-1.192.46.163.434 1.029-.434.19.46-1.03.407.19.515 1.218-.488.19.488-1.787.73zm3.764-1.544l-.704-1.002-.244-.406h-.027c.046.15.082.305.108.46l.217 1.219-.568.244-1.599-2.086.596-.243.623.893.352.542a6.102 6.102 0 01-.108-.623l-.19-1.083.542-.217.623.92.325.515-.034-.223a11.25 11.25 0 00-.074-.427l-.163-1.056.57-.244.324 2.6-.569.217z"
                fill={color}
                opacity={opacity}
            />
            <Path
                d="M19.585 6.5h-.027c.046.152.082.306.109.461l.216 1.219-.568.244-1.598-2.086.595-.244.623.894.352.542a6.075 6.075 0 01-.108-.623l-.19-1.083.542-.217.623.92.325.515s-.013-.094-.034-.223c-.02-.129-.047-.291-.074-.427l-.163-1.056.57-.244.324 2.6-.569.217-.704-1.002-.244-.406zM18.556 8.722l-1.787.731-.948-2.356 1.787-.704.19.487-1.192.46.163.434 1.029-.433.19.46-1.03.406.19.515 1.218-.488.19.488zM14.44 8.694h-.028l.163.38.46 1.083-.569.216-.947-2.329.568-.216 1.165.866.298.244a3.195 3.195 0 00-.163-.352l-.433-1.11.569-.244.948 2.329-.596.244-1.138-.867-.298-.244z"
                fill={color}
                opacity={opacity}
            />
            <G clipPath="url(#clip2_1161_2)">
                <Path
                    d="M23.956 9.486a.591.591 0 01-.341.763l-1.743.71-.148 1.744a.621.621 0 01-.207.444.591.591 0 01-.502.088l-1.86-.384-1.212 1.33a.59.59 0 01-.886 0l-1.211-1.33-1.861.384a.591.591 0 01-.502-.088.621.621 0 01-.207-.444l-.148-1.744-1.743-.71a.592.592 0 01-.295-.857l1.004-1.508-1.004-1.508a.591.591 0 01-.059-.503.532.532 0 01.354-.354l1.743-.71.148-1.745c.005-.17.08-.33.207-.443a.591.591 0 01.502-.089l1.86.385 1.212-1.36a.65.65 0 01.886 0l1.211 1.36 1.861-.385a.591.591 0 01.502.089.622.622 0 01.207.443l.148 1.745 1.743.71c.17.051.303.184.354.354a.591.591 0 01-.059.503l-1.004 1.508 1.004 1.508c.018.03.033.061.046.094z"
                    fill="#000000"
                />
                <Path
                    d="M19.521 6.224h-.026c.044.148.08.298.105.45l.212 1.19-.555.239-1.56-2.037.582-.238.608.873.343.529a5.907 5.907 0 01-.105-.609l-.185-1.058.528-.212.608.9.317.503s-.013-.093-.033-.219c-.02-.125-.046-.284-.072-.416l-.159-1.032.555-.238.317 2.54-.555.211-.687-.979-.238-.397zM18.517 8.394l-1.745.714-.925-2.301 1.745-.688.184.476-1.163.45.16.423 1.003-.423.186.45-1.005.396.185.503 1.19-.476.185.476zM14.499 8.368h-.027l.159.37.45 1.058-.556.212-.925-2.275.555-.212 1.137.847.29.238a3.133 3.133 0 00-.158-.344l-.423-1.085.555-.238.925 2.275-.581.238-1.11-.846-.291-.238z"
                    fill="#fff"
                />
            </G>
        </G>
    </Svg>
)

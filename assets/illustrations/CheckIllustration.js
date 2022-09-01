import * as React from "react"
import { StyleSheet, useColorScheme } from "react-native"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CheckIllustration = (props) => {
    const colorScheme = useColorScheme();
    let fillColorLight = null;
    let fillColorDark = null;

    colorScheme === 'dark'? fillColorLight = "#212121" : fillColorLight ="#ffffff";
    colorScheme === 'dark'? fillColorDark = "#212121" : fillColorDark ="#cbcbcb";



    return(<Svg
    width={275}
    height={349}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={[{shadowColor: colorScheme === 'dark' ? "#111" : "#777"}, styles.svg]}

    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M106.51 286.446c-5.472-6.01-13.401-9.456-21.756-9.456l-.322.001c-5.502.002-10.907-1.552-15.66-4.504l-.495-.307.398-.437a32.338 32.338 0 0 0 5.34-8.051 9.067 9.067 0 0 1-3.429 2.147 8.628 8.628 0 0 1-3.96.395 9.002 9.002 0 0 1-3.947-1.507 9.72 9.72 0 0 1-2.936-3.188c-2.92-5.045-6.4-12.203-6.4-17.657.004-4.609.91-9.167 2.661-13.383 1.75-4.216 4.306-7.997 7.505-11.103a20.658 20.658 0 0 0 4.747-6.976 21.816 21.816 0 0 0 1.663-8.431l-.002-.413c0-3.823.438-7.632 1.306-11.341l.088-.375.362.014a27.962 27.962 0 0 0 6.957-.621 22.347 22.347 0 0 1-6.239-1.767l-.39-.168.133-.424c9.108-6.006 29.667-2.896 41.599-31.97 9.676-23.576 43.817 20.928 43.817 46.652 0 2.625-2.44 6.093-.613 7.828 19.739 18.754 6.119 30.797 1.825 42.915-1.019 2.875 1.19 6.031 1.19 9.142 0 .528-.012 1.073-.037 1.619l-.038.841-.659-.467a22.126 22.126 0 0 1-3.6-3.144 21.388 21.388 0 0 1 1.562 8.806 21.275 21.275 0 0 1-2.164 8.66c-2.069 4.158-4.07 7.135-5.949 8.847-6.017 5.484-13.774 8.312-21.684 7.908-7.911-.405-15.377-4.013-20.873-10.085Z"
        fill={fillColorDark}
      />
      <Path
        d="M139.559 349a.54.54 0 0 0 .366-.146.612.612 0 0 0 .187-.365c.023-.178 2.35-18.048.26-41.798-1.929-21.933-8.127-53.525-26.691-79.471a.585.585 0 0 0-.164-.154.536.536 0 0 0-.424-.062.58.58 0 0 0-.341.277.625.625 0 0 0 .039.661c18.404 25.721 24.552 57.082 26.468 78.86 2.077 23.612-.231 41.342-.255 41.519a.631.631 0 0 0 .132.474.569.569 0 0 0 .191.151.52.52 0 0 0 .232.054Z"
        fill="#3F3D56"
      />
      <Path
        d="M124.409 263.818c.118 0 .233-.04.329-.114a.602.602 0 0 0 .203-.297.64.64 0 0 0 0-.368.6.6 0 0 0-.203-.298 75.448 75.448 0 0 0-17.012-9.223c-9.386-3.659-23.659-6.976-38.352-1.996a.533.533 0 0 0-.192.112.59.59 0 0 0-.197.405.63.63 0 0 0 .13.435.562.562 0 0 0 .38.209.534.534 0 0 0 .218-.027c14.392-4.877 28.406-1.615 37.628 1.981a74.113 74.113 0 0 1 16.739 9.067.538.538 0 0 0 .329.114ZM149.998 195.946a.626.626 0 0 0-.082-.358.57.57 0 0 0-.264-.237.532.532 0 0 0-.639.168 83.293 83.293 0 0 0-9.863 17.405c-4.103 9.706-8.238 24.627-4.632 40.592a.634.634 0 0 0 .092.211.56.56 0 0 0 .365.239.535.535 0 0 0 .416-.107.567.567 0 0 0 .148-.171.62.62 0 0 0 .067-.45c-3.532-15.639.532-30.289 4.564-39.825a81.933 81.933 0 0 1 9.698-17.127.612.612 0 0 0 .13-.34Z"
        fill="#3F3D56"
      />
      <Path
        d="M257.843 348.37h-44.51l-.191-.37a53.543 53.543 0 0 1-1.632-3.46c-4.584-10.453-6.522-22.408-8.232-32.955l-1.288-7.95a5.198 5.198 0 0 1 .338-2.845 4.823 4.823 0 0 1 1.772-2.159 4.4 4.4 0 0 1 2.602-.736 4.424 4.424 0 0 1 2.544.938c6.765 5.241 13.531 10.478 20.301 15.709 2.563 1.986 5.49 4.285 8.294 6.769.27-1.399.553-2.802.836-4.186a5.001 5.001 0 0 1 1.316-2.503 4.51 4.51 0 0 1 2.405-1.293 4.353 4.353 0 0 1 2.673.358 4.715 4.715 0 0 1 2.03 1.887l5.207 8.91c3.798 6.507 7.151 12.918 6.468 19.834.003.084-.003.168-.018.251a16.478 16.478 0 0 1-.756 3.329l-.159.472Z"
        fill={fillColorLight}
      />
      <Path
        d="m237.106 162.027-8.59-33.858c-.368-1.434-1.25-2.656-2.456-3.402a5.035 5.035 0 0 0-3.992-.589 5.18 5.18 0 0 0-1.926 1.001 5.57 5.57 0 0 0-1.398 1.729 5.925 5.925 0 0 0-.644 2.177c-.073.765 0 1.538.217 2.271l9.935 34.879 5.198 21.465a4.948 4.948 0 0 0-1.606 2.431 5.25 5.25 0 0 0-.005 2.973 4.947 4.947 0 0 0 1.597 2.437 4.467 4.467 0 0 0 2.622 1.02 4.423 4.423 0 0 0 2.697-.767 4.866 4.866 0 0 0 1.795-2.276c.365-.937.45-1.971.244-2.961a5.02 5.02 0 0 0-1.396-2.574l-2.292-25.956ZM164.824 154.735l26.099-21.391c1.103-.909 1.827-2.245 2.014-3.717a5.94 5.94 0 0 0-1.014-4.153 5.428 5.428 0 0 0-1.605-1.513 5.087 5.087 0 0 0-2.035-.716 5 5 0 0 0-2.135.199 5.222 5.222 0 0 0-1.888 1.081l-26.472 23.104-16.64 13.317a4.41 4.41 0 0 0-2.724-.652 4.495 4.495 0 0 0-2.581 1.131 4.982 4.982 0 0 0-1.505 2.503 5.236 5.236 0 0 0 .117 2.971 4.907 4.907 0 0 0 1.696 2.36 4.443 4.443 0 0 0 2.661.897 4.447 4.447 0 0 0 2.663-.891 4.922 4.922 0 0 0 1.7-2.358l21.649-12.172ZM186.096 159.652l-1.15 27.362 36.122-8.361c-3.075-10.995-5.165-12.87-2.855-20.521l-32.117 1.52Z"
        fill="#A0616A"
      />
      <Path
        d="M208.307 109.49h-12.036l-5.169 9.419-2.463-.145a8.38 8.38 0 0 0-3.543.563 8.8 8.8 0 0 0-3.045 2.009 9.468 9.468 0 0 0-2.052 3.127 9.981 9.981 0 0 0-.723 3.736l3.035 5.009s-5.427 10.073 2.391 15.028c0 0-1.395 9.336 0 9.236 1.394-.1 4.606-2.001 1.394-.1-3.212 1.9-2.972 2.155-2.557 2.597l.416.443 33.771 6.038s.988-6.971 1.094-8.215c.107-1.244-.607 1.797.107-1.244.714-3.04 1.784-1.9.714-3.04-1.071-1.14 6.936-15.264 3.646-20.743l5.275-5.479c0-5.255-7.926-9.515-12.861-9.515h-.632l-6.762-8.724Z"
        fill={fillColorDark}
      />
      <Path
        d="M179.307 337.821h-4.872l-2.317-20.011 7.19.001-.001 20.01Z"
        fill="#A0616A"
      />
      <Path
        d="M164.603 345.476c.003.581.22 1.138.606 1.549.385.411.907.644 1.453.648h9.171l.284-.627 1.297-2.851.502 2.851.112.627h3.459l-.05-.632-.922-11.779-1.207-.079-5.213-.328-1.281-.084v3.517c-.971 1.101-8.598 5.263-8.211 7.188Z"
        fill="#2F2E41"
      />
      <Path
        d="m251.708 324.232-4.097 2.807-12.116-15.494 6.048-4.142 10.165 16.829Z"
        fill="#A0616A"
      />
      <Path
        d="M243.231 339.142c.297.487.763.83 1.296.954a1.973 1.973 0 0 0 1.552-.293l7.712-5.284-.079-.691-.358-3.144 1.871 2.107.412.464 2.909-1.993-.362-.503-6.76-9.375-1.055.629-4.551 2.727-1.12.668 1.787 2.958c-.258 1.486-4.558 9.38-3.254 10.776ZM220.502 175.562s-23.09 13.007-35.303 4.133c0 0-2.672 13.779-3.742 14.919-1.071 1.14-2.776 1.637-1.567 2.909 1.21 1.271 1.883 2.989-.416 5.17-2.299 2.182-4.592 1.49-2.375 3.736 2.217 2.246-6.705 57.35-6.705 57.35s1.428 51.244 0 52.794c-1.427 1.55-3.335 1.897-1.489 3.813 1.846 1.917 1.846.43 1.846 3.074v2.643l.845 2.627h11.587s2.796-3.459 0-6.463c-2.797-3.004.851-3.826 1.703-6.646.853-2.819 2.281.221.853-2.819-1.427-3.04-2.113-2.462-2.127-4.461-.014-1.999 21.041-80.285 21.041-80.285l2.55 43.33 30.673 47.454 9.029-7.211s-6.574-9.855-5.036-11.21c1.537-1.354-4.531-3.053-2.617-4.582 1.913-1.528-2.693-3.068-.957-5.094 1.736-2.025-2.392-7.131-4.784-7.131-2.391 0-5.748-8.511-5.748-8.511l5.011-67.237-12.272-32.302ZM196.029 81.832c-.164.229-1.466.106-3.031-.138-3.096-.481-3.517.091-5.831 2.332-3.352 3.248-1.447 23.052-3.094 27.343l-.532.418a18.259 18.259 0 0 0 3.099-.924c.569-1.911 1.139-3.828 1.713-5.737a17.706 17.706 0 0 1 1.012 4.634c.797-.335 1.589-1.153 4.919-2.25 1.676-1.211 13.805-2.429 15.365-2.962 3.957-14.339-2.421-20.138-13.62-22.716Z"
        fill="#2F2E41"
      />
      <Path
        d="M200.124 103.943c6.401 0 11.591-5.526 11.591-12.343s-5.19-12.343-11.591-12.343c-6.402 0-11.591 5.526-11.591 12.343s5.189 12.343 11.591 12.343Z"
        fill="#A0616A"
      />
      <Path
        d="M207.421 80.745a4.97 4.97 0 0 1-1.852-.692 1.833 1.833 0 0 1-.661-.759 1.98 1.98 0 0 1-.183-1.016c.143-.877 1.074-1.4 1.909-1.347a5.02 5.02 0 0 1 2.3.99 3.913 3.913 0 0 0-.966-2.26 3.498 3.498 0 0 0-2.071-1.141c1.097-.063 2.238-.119 3.253.33 1.014.45 1.86 1.563 1.677 2.717 1.706-.234 3.388 1.032 4.093 2.703.704 1.67.564 3.633.002 5.364a1.96 1.96 0 0 1-.318.731 1.82 1.82 0 0 1-.574.525c-.574.232-1.192-.157-1.69-.541a41.527 41.527 0 0 1-7.045-6.93"
        fill="#2F2E41"
      />
      <Path
        d="M212.475 104.723c-.491.246-.236 1.163-.617 1.573a1.566 1.566 0 0 1-.586.388 7.872 7.872 0 0 0-.496-2.227c-.05-.129-.132-.274-.26-.262-.15.019-.189.228-.193.383a6.776 6.776 0 0 1-.475 2.246l-.01.027-.332-.012c-.828-.034-2.662-2.299-3.069-1.531 1.434-2.71 3.183-6.784 3.451-9.88a4.679 4.679 0 0 0-.132-1.939 1.724 1.724 0 0 0-.507-.798 1.564 1.564 0 0 0-.832-.38.968.968 0 0 0-.44.083 1.026 1.026 0 0 0-.365.274c-.101.12-.177.261-.221.415a1.153 1.153 0 0 0-.033.475l-.207-.03c-1.92-1.665-.264-4.557-2.498-5.701-.757-.388-5.389.908-6.206.68a7.915 7.915 0 0 0-.518-2.672c-.049-.129-.132-.273-.26-.262-.15.02-.189.228-.193.384a6.801 6.801 0 0 1-.474 2.246 8.316 8.316 0 0 0-3.394.19c-.978.274-1.906.745-2.887.996-.485.158-.995.21-1.5.15a3.573 3.573 0 0 1-1.433-.492c-1.246-.89-1.464-2.858-.843-4.31a8.45 8.45 0 0 1 1.792-2.462c.56-.578 1.142-1.133 1.723-1.688l1.563-1.493a19.319 19.319 0 0 1 2.092-1.817 9.963 9.963 0 0 1 3.882-1.634 9.702 9.702 0 0 1 4.172.137c1.641.418 3.836-.171 5.338.646.786.43 2.523 2.075 3.212 2.66 1.763 1.494.57.277 2.498 1.14 4.598 2.06 2.565 22.839-.742 24.497Z"
        fill="#2F2E41"
      />
      <Path
        d="M84.139 194.815c39.699 0 71.881-34.272 71.881-76.548 0-42.277-32.182-76.549-71.881-76.549-39.7 0-71.882 34.272-71.882 76.549 0 42.276 32.183 76.548 71.882 76.548Z"
        fill={fillColorLight}
      />
      <Path
        d="M84.139 195.579c-40.031 0-72.6-34.682-72.6-77.312 0-42.63 32.569-77.313 72.6-77.313 40.031 0 72.599 34.683 72.599 77.313s-32.568 77.312-72.6 77.312Zm0-153.097c-39.24 0-71.164 33.997-71.164 75.785 0 41.787 31.924 75.784 71.164 75.784s71.164-33.997 71.164-75.784c0-41.788-31.925-75.785-71.164-75.785Z"
        fill="#F44675"
      />
      <Path
        d="M74.332 158.107a7.601 7.601 0 0 1-3.575-.899 8.141 8.141 0 0 1-2.82-2.508l-19.611-27.845a8.771 8.771 0 0 1-1.349-2.996 9.052 9.052 0 0 1-.17-3.317 8.883 8.883 0 0 1 1.036-3.134 8.364 8.364 0 0 1 2.082-2.474 7.787 7.787 0 0 1 2.814-1.436 7.516 7.516 0 0 1 3.115-.181c1.04.158 2.04.533 2.943 1.103a8.177 8.177 0 0 1 2.322 2.218l12.83 18.215 32.952-52.636c1.177-1.877 3.006-3.18 5.084-3.622 2.079-.442 4.238.013 6.001 1.265 1.764 1.252 2.989 3.199 3.405 5.412a8.965 8.965 0 0 1-1.184 6.392l-39.22 62.651a8.21 8.21 0 0 1-2.784 2.727 7.62 7.62 0 0 1-3.648 1.062c-.074.001-.148.003-.223.003Z"
        fill="#F44675"
      />
      <Path
        d="M158.198 46.501c.2-1.463-1.24-2.898-3.215-3.204-1.976-.306-3.739.632-3.939 2.096-.2 1.463 1.239 2.898 3.215 3.204 1.975.306 3.739-.632 3.939-2.096Z"
        fill="#E6E6E6"
      />
      <Path
        d="M181.718 44.057c.2-1.463-1.239-2.898-3.215-3.204-1.975-.306-3.739.632-3.939 2.096-.2 1.463 1.24 2.898 3.215 3.204 1.976.306 3.739-.632 3.939-2.096Z"
        fill="#3F3D56"
      />
      <Path
        d="M151.757 26.223c.2-1.463-1.24-2.898-3.215-3.204-1.976-.306-3.739.632-3.939 2.096-.2 1.463 1.239 2.898 3.215 3.204 1.975.306 3.739-.632 3.939-2.096Z"
        fill="#FF6584"
      />
      <Path
        d="M141.537 17.917c.009-1.344-.695-2.439-1.572-2.446-.878-.007-1.597 1.077-1.607 2.42-.009 1.344.694 2.439 1.572 2.446.878.007 1.597-1.077 1.607-2.42Z"
        fill="#E6E6E6"
      />
      <Path
        d="M138.071 2.446c.009-1.344-.695-2.439-1.572-2.446-.878-.007-1.597 1.076-1.607 2.42-.009 1.343.694 2.438 1.572 2.445.878.008 1.597-1.076 1.607-2.42Z"
        fill="#3F3D56"
      />
      <Path
        d="M165.023 29.674c.009-1.344-.694-2.439-1.572-2.446-.878-.007-1.597 1.077-1.606 2.42-.01 1.344.694 2.439 1.571 2.446.878.007 1.597-1.077 1.607-2.42Z"
        fill="#E6E6E6"
      />
      <Path
        d="M153.657 35.717c.009-1.343-.695-2.438-1.572-2.445-.878-.007-1.597 1.076-1.607 2.42-.009 1.343.695 2.438 1.572 2.445.878.007 1.597-1.076 1.607-2.42Z"
        fill="#FF6584"
      />
      <Path
        d="M169.479 46.887c.009-1.343-.694-2.438-1.572-2.445-.878-.007-1.597 1.076-1.607 2.42-.009 1.343.695 2.438 1.572 2.445.878.007 1.597-1.076 1.607-2.42Z"
        fill="#3F3D56"
      />
      <Path
        d="M23.305 227.847c.2-1.464-1.24-2.898-3.215-3.205-1.975-.306-3.739.633-3.939 2.096-.2 1.464 1.24 2.898 3.215 3.204 1.976.306 3.74-.632 3.94-2.095Z"
        fill="#E6E6E6"
      />
      <Path
        d="M46.826 225.402c.2-1.463-1.24-2.898-3.215-3.204-1.975-.306-3.739.633-3.939 2.096-.2 1.464 1.24 2.898 3.215 3.204 1.976.306 3.74-.632 3.94-2.096Z"
        fill="#3F3D56"
      />
      <Path
        d="M16.865 207.568c.2-1.463-1.24-2.898-3.215-3.204-1.976-.306-3.74.632-3.94 2.096-.2 1.463 1.24 2.898 3.216 3.204 1.975.306 3.739-.632 3.939-2.096Z"
        fill="#FF6584"
      />
      <Path
        d="M6.644 199.262c.01-1.343-.694-2.438-1.572-2.445-.877-.007-1.596 1.076-1.606 2.42-.01 1.343.694 2.438 1.572 2.445.878.007 1.597-1.076 1.606-2.42Z"
        fill="#E6E6E6"
      />
      <Path
        d="M3.178 183.791c.01-1.343-.694-2.438-1.572-2.445C.73 181.338.01 182.422 0 183.765c-.01 1.344.695 2.439 1.572 2.446.878.007 1.597-1.076 1.606-2.42Z"
        fill="#3F3D56"
      />
      <Path
        d="M30.13 211.019c.01-1.343-.694-2.438-1.571-2.445-.878-.007-1.597 1.076-1.607 2.42-.01 1.343.694 2.438 1.572 2.445.878.007 1.597-1.076 1.607-2.42Z"
        fill="#E6E6E6"
      />
      <Path
        d="M18.764 217.063c.01-1.344-.694-2.439-1.572-2.446-.877-.007-1.597 1.077-1.606 2.42-.01 1.344.694 2.439 1.572 2.446.877.007 1.597-1.077 1.606-2.42Z"
        fill="#FF6584"
      />
      <Path
        d="M34.587 228.233c.01-1.344-.695-2.439-1.572-2.446-.878-.007-1.597 1.076-1.607 2.42-.01 1.344.694 2.438 1.572 2.446.878.007 1.597-1.077 1.607-2.42Z"
        fill="#3F3D56"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h275v349H0z" />
      </ClipPath>
    </Defs>
  </Svg>)
}


const styles=StyleSheet.create({
    svg: {
      marginTop: -60,
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 1,
      shadowRadius: 4.49,
      elevation: 12,
    }
  })

export default CheckIllustration
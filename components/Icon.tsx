import React from 'react'
import Svg, { Path } from 'react-native-svg';

interface IInputColor {
   color: string
}

export const IconSearch = ({ color }: IInputColor) => {
   return <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
      <Path d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M21.9243 21.9248L27.9994 27.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
}

export const IconText = ({ color }: IInputColor) => {
   return <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path d="M12 19H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 15H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M20.0002 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V27C26 27.2652 25.8946 27.5196 25.7071 27.7071C25.5196 27.8946 25.2652 28 25 28H7C6.73478 28 6.48043 27.8946 6.29289 27.7071C6.10536 27.5196 6 27.2652 6 27V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H11.9997" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M11 9V8C11 6.67392 11.5268 5.40215 12.4645 4.46447C13.4021 3.52678 14.6739 3 16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V9H11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
}

export const IconProfile = ({ color }: IInputColor) => {
   return <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
      <Path d="M3.87354 26.9988C5.10299 24.8708 6.8708 23.1037 8.99939 21.8752C11.128 20.6467 13.5424 20 16.0001 20C18.4577 20 20.8721 20.6468 23.0007 21.8754C25.1292 23.1039 26.897 24.871 28.1264 26.9991" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
}

export const IconSupport = ({ color }: IInputColor) => {
   return <Svg width="26" height="24" viewBox="0 0 26 24" fill="none">
      <Path d="M6.66887 19.2345L2.64348 22.6184C2.49771 22.741 2.31998 22.8193 2.1312 22.8443C1.94241 22.8693 1.75042 22.8399 1.57779 22.7595C1.40516 22.6791 1.25908 22.551 1.15673 22.3905C1.05437 22.2299 1 22.0434 1 21.853V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H24C24.2652 1 24.5196 1.10536 24.7071 1.29289C24.8946 1.48043 25 1.73478 25 2V18C25 18.2652 24.8946 18.5196 24.7071 18.7071C24.5196 18.8946 24.2652 19 24 19H7.31235C7.07693 19 6.84907 19.0831 6.66887 19.2345Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
}

export const IconDate = ({ color }: IInputColor) => {
   return <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path d="M17.875 3.50879H4.125C3.7453 3.50879 3.4375 3.81692 3.4375 4.19703V17.9618C3.4375 18.3419 3.7453 18.65 4.125 18.65H17.875C18.2547 18.65 18.5625 18.3419 18.5625 17.9618V4.19703C18.5625 3.81692 18.2547 3.50879 17.875 3.50879Z" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M15.125 2.13232V4.88528" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M6.875 2.13232V4.88528" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M3.4375 7.63818H18.5625" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M7.90625 11.0791H10.3125L8.9375 12.7997C9.16358 12.7997 9.38618 12.8555 9.58558 12.9622C9.78498 13.0689 9.95502 13.2231 10.0807 13.4113C10.2063 13.5994 10.2836 13.8157 10.3058 14.0409C10.3281 14.2662 10.2945 14.4934 10.208 14.7025C10.1215 14.9117 9.98491 15.0962 9.8102 15.2399C9.63548 15.3835 9.42809 15.4818 9.20637 15.5261C8.98465 15.5703 8.75544 15.5592 8.53906 15.4936C8.32268 15.428 8.12578 15.31 7.96582 15.1501" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12.375 12.1115L13.75 11.0791V15.5527" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>
}

export const IconClock = ({ color }: IInputColor) => {
   return <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path d="M11 19.3727C15.5563 19.3727 19.25 15.6751 19.25 11.1138C19.25 6.5526 15.5563 2.85498 11 2.85498C6.44365 2.85498 2.75 6.5526 2.75 11.1138C2.75 15.6751 6.44365 19.3727 11 19.3727Z" stroke="#8FC045" strokeWidth="2" stroke-miterlimit="10" />
      <Path d="M11 6.29614V11.1138H15.8125" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>

}

export const IconLocation = ({ color }: IInputColor) => {
   return <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path d="M11 11.8365C12.5188 11.8365 13.75 10.6039 13.75 9.08352C13.75 7.56311 12.5188 6.33057 11 6.33057C9.48122 6.33057 8.25 7.56311 8.25 9.08352C8.25 10.6039 9.48122 11.8365 11 11.8365Z" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M17.875 9.08356C17.875 15.2777 11 20.0954 11 20.0954C11 20.0954 4.125 15.2777 4.125 9.08356C4.125 7.25823 4.84933 5.50767 6.13864 4.21698C7.42795 2.92628 9.17664 2.20117 11 2.20117C12.8234 2.20117 14.572 2.92628 15.8614 4.21698C17.1507 5.50767 17.875 7.25823 17.875 9.08356V9.08356Z" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>

}

export const IconStreet = ({ color }: IInputColor) => {
   return <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path d="M17.1875 19.4759C18.3266 19.4759 19.25 18.5515 19.25 17.4112C19.25 16.2708 18.3266 15.3464 17.1875 15.3464C16.0484 15.3464 15.125 16.2708 15.125 17.4112C15.125 18.5515 16.0484 19.4759 17.1875 19.4759Z" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M6.1875 5.02271H14.4375C15.1668 5.02271 15.8663 5.31275 16.382 5.82903C16.8978 6.34531 17.1875 7.04553 17.1875 7.77566C17.1875 8.50579 16.8978 9.20601 16.382 9.72229C15.8663 10.2386 15.1668 10.5286 14.4375 10.5286H6.1875C5.27582 10.5286 4.40148 10.8912 3.75682 11.5365C3.11216 12.1819 2.75 13.0571 2.75 13.9698C2.75 14.8825 3.11216 15.7577 3.75682 16.4031C4.40148 17.0484 5.27582 17.411 6.1875 17.411H15.125" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
   </Svg>

}

export const IconDropdown = ({ color }: IInputColor) => {
   return <Svg width="22" height="12" viewBox="0 0 22 12" fill="none">
   <Path d="M21 1L11 11L1 1" stroke="#8FC045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </Svg>
   
}
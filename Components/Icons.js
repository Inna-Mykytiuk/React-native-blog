import Svg, { Circle, Path, G, Rect, Defs, ClipPath } from "react-native-svg";

export const PlusIcon = ({ focused }) => {
  const color = focused ? "#FFFFFF" : "#212121";
  const bgcBtn = focused ? "#FF6C00" : "transparent";

  return (
    <Svg fill='none'>
      <G clipPath='url(#clip0_12_109)'>
        <Rect width={70} height={40} fill={bgcBtn} rx={20} />
        <Path
          fill={color}
          fillRule='evenodd'
          d='M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z'
          clipRule='evenodd'
        />
      </G>
    </Svg>
  );
};

export const GridIcon = ({ focused }) => {
  const color = focused ? "#FFFFFF" : "#212121";
  const bgcBtn = focused ? "#FF6C00" : "transparent";

  return (
    <Svg fill='none'>
      <G clipPath='url(#clip0_12_105)'>
        <Rect width={70} height={40} fill={bgcBtn} rx={20} />
        <Path
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M26 11h7v7h-7v-7ZM37 11h7v7h-7v-7ZM37 22h7v7h-7v-7ZM26 22h7v7h-7v-7Z'
          clipRule='evenodd'
        />
      </G>
    </Svg>
  );
};

export const UserIcon = ({ focused }) => {
  const color = focused ? "#FFFFFF" : "#212121";
  const bgcBtn = focused ? "#FF6C00" : "transparent";

  return (
    <Svg fill='none'>
      <Rect width={70} height={40} fill={bgcBtn} rx={20} />
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M43 29v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2'
      />
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M35 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export const AddAvatarIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12} fill='white' stroke='#FF6C00' />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z'
      fill='#FF6C00'
    />
  </Svg>
);

export const RemoveAvatarIcon = (props) => {
  return (
    <Svg
      width={37}
      height={37}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Circle cx={18.5} cy={18.5} r={12} fill='white' stroke='#E8E8E8' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z'
        fill='#BDBDBD'
      />
    </Svg>
  );
};

export const LogOutIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10'
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17 16L21 12L17 8'
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 12H9'
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export const ArrowLeftIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M20 12H4'
        stroke='#212121'
        strokeOpacity='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10 18L4 12L10 6'
        stroke='#212121'
        strokeOpacity='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export const CameraIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#clip0_36_0)'>
        <Path
          d='M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z'
          fill='#BDBDBD'
        />
        <Path
          d='M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z'
          fill='#BDBDBD'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_36_0'>
          <Rect width={24} height={24} fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const TrashIcon = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      stroke='#BDBDBD'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 6h18'
    />
    <Path
      fill='#BDBDBD'
      d='M19.5 6a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm2 0a.5.5 0 0 0 1 0h-1Zm8 0a.5.5 0 0 0 1 0h-1Zm3 0v14h1V6h-1Zm0 14a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM17 21.5H7v1h10v-1Zm-10 0A1.5 1.5 0 0 1 5.5 20h-1A2.5 2.5 0 0 0 7 22.5v-1ZM5.5 20V6h-1v14h1Zm3-14V4h-1v2h1Zm0-2A1.5 1.5 0 0 1 10 2.5v-1A2.5 2.5 0 0 0 7.5 4h1ZM10 2.5h4v-1h-4v1Zm4 0A1.5 1.5 0 0 1 15.5 4h1A2.5 2.5 0 0 0 14 1.5v1ZM15.5 4v2h1V4h-1Z'
    />
    <Path
      stroke='#BDBDBD'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10 11v6M14 11v6'
    />
  </Svg>
);

export const MapPinIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z'
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z'
        stroke='#BDBDBD'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export const AddCommentIcon = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={16}
    fill='none'
    {...props}
  >
    <Path
      fill='#fff'
      d='m6 1 .354-.354a.5.5 0 0 0-.708 0L6 1Zm4.646 5.354a.5.5 0 0 0 .708-.708l-.708.708Zm-10-.708a.5.5 0 1 0 .708.708l-.708-.708ZM5.5 15a.5.5 0 0 0 1 0h-1Zm.146-13.646 5 5 .708-.708-5-5-.708.708Zm0-.708-5 5 .708.708 5-5-.708-.708ZM5.5 1v7h1V1h-1Zm0 7v7h1V8h-1Z'
    />
  </Svg>
);

export const LikeOnIcon = (props) => {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        d='M13.3646 7.59996H12.8646C12.8646 7.87611 13.0884 8.09996 13.3646 8.09996V7.59996ZM13.3646 4.39998H13.8646H13.3646ZM10.7735 2V1.5C10.5811 1.5 10.4059 1.6103 10.3227 1.78369L10.7735 2ZM7.31863 9.19995L6.86785 8.98365C6.83545 9.05115 6.81863 9.12508 6.81863 9.19995H7.31863ZM7.31863 17.9999H6.81863C6.81863 18.276 7.04249 18.4999 7.31863 18.4999V17.9999ZM17.0612 17.9999L17.0665 17.4999H17.0612V17.9999ZM18.7886 16.6399L18.2953 16.5582L18.2952 16.5591L18.7886 16.6399ZM19.9805 9.43995L20.4738 9.52161L20.474 9.52081L19.9805 9.43995ZM18.2531 7.59996V8.09999L18.2584 8.09994L18.2531 7.59996ZM7.31852 17.9999V18.4999C7.59466 18.4999 7.81852 18.276 7.81852 17.9999H7.31852ZM7.31852 9.19995H7.81852C7.81852 8.92381 7.59466 8.69995 7.31852 8.69995V9.19995ZM13.8646 7.59996V4.39998H12.8646V7.59996H13.8646ZM13.8646 4.39998C13.8646 2.76298 12.4439 1.5 10.7735 1.5V2.5C11.9651 2.5 12.8646 3.38604 12.8646 4.39998L13.8646 4.39998ZM10.3227 1.78369L6.86785 8.98365L7.76942 9.41626L11.2242 2.21631L10.3227 1.78369ZM6.81863 9.19995V17.9999H7.81863V9.19995H6.81863ZM7.31863 18.4999H17.0612V17.4999H7.31863V18.4999ZM17.056 18.4999C18.1356 18.5112 19.1085 17.7805 19.2821 16.7207L18.2952 16.5591C18.2104 17.077 17.7096 17.5067 17.0665 17.4999L17.056 18.4999ZM19.2819 16.7216L20.4738 9.52161L19.4873 9.35829L18.2953 16.5582L19.2819 16.7216ZM20.474 9.52081C20.5761 8.89746 20.3756 8.27092 19.9407 7.80775L19.2117 8.4922C19.442 8.73749 19.5371 9.05422 19.4871 9.3591L20.474 9.52081ZM19.9407 7.80775C19.5079 7.34665 18.8878 7.09328 18.2479 7.09999L18.2584 8.09994C18.6321 8.09602 18.9794 8.24483 19.2117 8.4922L19.9407 7.80775ZM18.2531 7.09996H13.3646V8.09996H18.2531V7.09996ZM7.31852 17.4999H4.72741V18.4999H7.31852V17.4999ZM4.72741 17.4999C4.01276 17.4999 3.5 16.972 3.5 16.3999H2.5C2.5 17.5951 3.53401 18.4999 4.72741 18.4999V17.4999ZM3.5 16.3999V10.7999H2.5V16.3999H3.5ZM3.5 10.7999C3.5 10.2278 4.01276 9.69995 4.72741 9.69995V8.69995C3.53401 8.69995 2.5 9.60476 2.5 10.7999H3.5ZM4.72741 9.69995H7.31852V8.69995H4.72741V9.69995ZM6.81852 9.19995V17.9999H7.81852V9.19995H6.81852Z'
        fill='#FF6C00'
      />
    </Svg>
  );
};

export const CommentOnIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5Z'
        fill='#FF6C00'
      />
    </Svg>
  );
};

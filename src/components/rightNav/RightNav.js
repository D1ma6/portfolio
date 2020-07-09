import React from "react";
import { Link } from "react-router-dom";
import styles from "./RightNav.module.css";

function LeftNav() {
  return (
    <div className={styles.rightNav}>
      <Link to="/" className={styles.wall}>
        wal <span>l.</span>
      </Link>
      <div className={styles.socialMedia}>
        <a href="https://www.behance.net/dmytrobula" target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M2.9187 9.17103H5.40765C6.47194 9.17103 7.18698 8.51322 7.18702 7.53415C7.18702 6.57036 6.4553 5.89728 5.40769 5.89728H2.9187C2.703 5.89728 2.52808 6.07216 2.52808 6.2879V8.7804C2.52808 8.99615 2.703 9.17103 2.9187 9.17103ZM3.30933 6.67853H5.40769C6.02335 6.67853 6.40577 7.00638 6.40577 7.53415C6.40577 8.30642 5.7078 8.38978 5.40769 8.38978H3.30933V6.67853Z"
                fill="#F2F2F2"
              />
              <path
                d="M5.51448 10.6152H2.9187C2.703 10.6152 2.52808 10.7901 2.52808 11.0059V13.712C2.52808 13.9278 2.703 14.1027 2.9187 14.1027H5.51448C6.07608 14.1027 6.5498 13.9454 6.88448 13.6479C7.23374 13.3374 7.41839 12.8917 7.41839 12.3589C7.41839 11.3323 6.63546 10.6152 5.51448 10.6152ZM5.51448 13.3214H3.30933V11.3965H5.51448C6.20694 11.3965 6.63714 11.7653 6.63714 12.3589C6.63714 13.1544 6.02663 13.3214 5.51448 13.3214Z"
                fill="#F2F2F2"
              />
              <path
                d="M8.39523 9.78707C8.65297 9.6182 8.88504 9.40746 9.08059 9.16156C9.53066 8.59559 9.76859 7.87895 9.76859 7.0891C9.76859 6.16641 9.4209 5.31871 8.78961 4.70215C8.09949 4.02813 7.12094 3.67188 5.95965 3.67188H0.390625C0.174922 3.67188 0 3.84676 0 4.0625V15.9375C0 16.1532 0.174922 16.3281 0.390625 16.3281H6.15547C7.33984 16.3281 8.32824 15.9644 9.01375 15.2763C9.65898 14.6286 10 13.7429 10 12.7151C10 11.4666 9.35531 10.3523 8.39523 9.78707ZM6.15547 15.5469H0.78125V4.45312H5.95969C8.05117 4.45312 8.98738 5.77703 8.98738 7.0891C8.98738 8.45906 8.11559 9.25219 7.2516 9.43047C7.06633 9.46867 6.93512 9.6341 6.94 9.82316C6.94492 10.0122 7.08457 10.1706 7.27148 10.1992C8.3816 10.3688 9.21875 11.4504 9.21875 12.715C9.21875 14.4618 8.04496 15.5469 6.15547 15.5469Z"
                fill="#F2F2F2"
              />
              <path
                d="M17.7285 3.98438H12.9629C12.7472 3.98438 12.5723 4.15926 12.5723 4.375V5.625C12.5723 5.84074 12.7472 6.01562 12.9629 6.01562H17.7285C17.9442 6.01562 18.1191 5.84074 18.1191 5.625V4.375C18.1191 4.15926 17.9442 3.98438 17.7285 3.98438ZM17.3379 5.23438H13.3535V4.76562H17.3379V5.23438Z"
                fill="#F2F2F2"
              />
              <path
                d="M11.4729 11.4636V11.457C11.4729 11.2412 11.298 11.0663 11.0823 11.0663C10.8666 11.0663 10.6917 11.2412 10.6917 11.457V11.4636C10.6917 11.6794 10.8666 11.8542 11.0823 11.8542C11.298 11.8542 11.4729 11.6794 11.4729 11.4636Z"
                fill="#F2F2F2"
              />
              <path
                d="M18.7691 7.86303C17.9107 6.92854 16.7325 6.45471 15.2673 6.45471C13.9545 6.45471 12.851 6.90674 11.9875 7.79819C11.4391 8.36452 11.0602 9.07479 10.8611 9.90932C10.811 10.1192 10.9406 10.3298 11.1504 10.3799C11.3604 10.4299 11.571 10.3005 11.621 10.0906C11.7871 9.39428 12.0993 8.80584 12.5487 8.34167C13.2694 7.59764 14.1586 7.23596 15.2673 7.23596C16.5222 7.23596 17.4795 7.61393 18.1937 8.39147C18.8485 9.1046 19.1922 10.2045 19.2172 11.6642H13.5572C13.4519 11.6642 13.3511 11.7068 13.2775 11.7822C13.204 11.8576 13.1641 11.9594 13.1667 12.0647C13.1863 12.8464 13.4206 13.4712 13.8627 13.9216C14.3094 14.3771 14.8716 14.608 15.5337 14.608C15.9976 14.608 16.3982 14.4819 16.7245 14.2331C16.8593 14.1303 16.9807 14.0026 17.0872 13.8518H18.8206C18.5598 14.3067 18.2158 14.6768 17.7981 14.9519C17.1987 15.3467 16.4281 15.5469 15.5079 15.5469C14.0353 15.5469 12.984 15.1117 12.2956 14.2186C12.004 13.8349 11.7874 13.3894 11.6518 12.8946C11.5948 12.6865 11.3798 12.564 11.1718 12.621C10.9638 12.678 10.8413 12.893 10.8983 13.101C11.0605 13.6926 11.3212 14.2276 11.6752 14.6934C12.5113 15.7781 13.8008 16.3281 15.5079 16.3281C16.5836 16.3281 17.4987 16.0846 18.2279 15.6042C18.7501 15.2603 19.1785 14.7999 19.5009 14.2357C19.6138 14.0383 19.7138 13.8235 19.7979 13.5973C19.8426 13.4774 19.8256 13.3433 19.7526 13.2382C19.6797 13.1331 19.5598 13.0705 19.4318 13.0705H16.8713C16.729 13.0705 16.5979 13.1478 16.5292 13.2724C16.449 13.418 16.3553 13.5321 16.2508 13.6118C16.0612 13.7564 15.8266 13.8267 15.5338 13.8267C15.0831 13.8267 14.7189 13.6788 14.4204 13.3744C14.1907 13.1405 14.0463 12.8344 13.9833 12.4455H19.6072C19.8199 12.4455 19.9936 12.2752 19.9977 12.0625C20.034 10.2032 19.6206 8.7903 18.7691 7.86303Z"
                fill="#F2F2F2"
              />
              <path
                d="M13.6003 11.0367H17.2096C17.315 11.0367 17.4158 10.9942 17.4894 10.9187C17.5629 10.8433 17.6028 10.7413 17.6001 10.636C17.5803 9.8703 17.3601 9.26994 16.9456 8.85162C16.5274 8.42979 16.0119 8.21588 15.4135 8.21588C14.7769 8.21588 14.2416 8.44194 13.8226 8.88783V8.88787C13.4092 9.32795 13.203 9.92069 13.2096 10.6497C13.2116 10.864 13.3859 11.0367 13.6003 11.0367ZM14.3919 9.4228C14.6611 9.13635 14.9953 8.99713 15.4135 8.99713C15.8012 8.99713 16.121 9.12947 16.3907 9.40158C16.5918 9.60451 16.7231 9.8908 16.7829 10.2555H14.0149C14.0642 9.91354 14.1888 9.63908 14.3919 9.4228Z"
                fill="#F2F2F2"
              />
              <path
                d="M1.64062 9.33594C1.42492 9.33594 1.25 9.51082 1.25 9.72656V12.9102C1.25 13.1259 1.42492 13.3008 1.64062 13.3008C1.85633 13.3008 2.03125 13.1259 2.03125 12.9102V9.72656C2.03125 9.51082 1.85633 9.33594 1.64062 9.33594Z"
                fill="#F2F2F2"
              />
              <path
                d="M1.64062 7.55859C1.42492 7.55859 1.25 7.73348 1.25 7.94922V7.95383C1.25 8.16957 1.42492 8.34445 1.64062 8.34445C1.85633 8.34445 2.03125 8.16957 2.03125 7.95383V7.94922C2.03125 7.73348 1.85633 7.55859 1.64062 7.55859Z"
                fill="#F2F2F2"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M5.5742 6.37907L5.59229 6.38739C5.64502 6.41153 5.70029 6.42297 5.75475 6.42297C5.90279 6.42297 6.04443 6.33837 6.11017 6.19497C6.20002 5.99884 6.11388 5.76701 5.91775 5.67713L5.90158 5.66974C5.70569 5.57928 5.47362 5.66482 5.38323 5.86072C5.2928 6.05657 5.37831 6.28868 5.5742 6.37907Z"
                fill="#F2F2F2"
              />
              <path
                d="M19.9081 3.78935C19.7961 3.65646 19.6099 3.6135 19.451 3.68396C19.2132 3.78939 18.9712 3.88221 18.7258 3.96213C19.0439 3.55896 19.2912 3.09908 19.4525 2.60158C19.5026 2.44701 19.4518 2.27756 19.3249 2.17608C19.198 2.07459 19.0215 2.06229 18.8818 2.14506C18.1995 2.54932 17.4661 2.84037 16.6989 3.0117C15.8975 2.24154 14.8158 1.80377 13.6971 1.80377C11.3085 1.80377 9.36538 3.74693 9.36538 6.13544C9.36538 6.2922 9.37393 6.45001 9.39089 6.60783C8.77679 6.54935 8.16886 6.43896 7.57777 6.27837C7.3696 6.22181 7.15495 6.34474 7.09839 6.55294C7.04183 6.76115 7.16476 6.97575 7.37296 7.03232C8.17343 7.24978 9.00241 7.38138 9.8369 7.42341C9.95921 7.42958 10.0766 7.37837 10.1552 7.28505C10.2339 7.19173 10.2644 7.06704 10.2378 6.94794C10.1773 6.6779 10.1466 6.40451 10.1466 6.13544C10.1466 4.17771 11.7394 2.58502 13.6971 2.58502C14.6754 2.58502 15.6188 2.99311 16.2856 3.70463C16.3774 3.80267 16.5132 3.8467 16.6451 3.82099C17.1815 3.71678 17.7036 3.56014 18.2069 3.35295C17.9248 3.74455 17.5645 4.07771 17.1447 4.329C16.9866 4.42365 16.9161 4.61592 16.9756 4.79029C17.0351 4.96466 17.2083 5.0738 17.3913 5.05209C17.7521 5.00927 18.1095 4.94248 18.4615 4.8522C18.1413 5.1872 17.7901 5.49255 17.4101 5.76583C17.3054 5.84115 17.2445 5.96326 17.2476 6.09216L17.2595 6.59806C17.257 11.9159 13.2091 17.4149 6.43652 17.4149C4.88883 17.4149 3.37238 17.0858 1.97758 16.4542C3.61953 16.3301 5.16039 15.7344 6.46699 14.7127C6.5971 14.6109 6.64917 14.4383 6.59699 14.2816C6.5448 14.1248 6.39968 14.0178 6.23453 14.0144C4.92695 13.9871 3.75711 13.2495 3.15949 12.1244C3.20211 12.1256 3.24504 12.1262 3.2882 12.1262C3.6757 12.1262 4.0584 12.0768 4.42566 11.9795C4.60113 11.933 4.72144 11.7719 4.71609 11.5904C4.71074 11.409 4.58113 11.2552 4.40324 11.2191C2.94617 10.9238 1.84192 9.74508 1.60379 8.31196C2.03446 8.46938 2.48082 8.55466 2.93746 8.56634C3.11141 8.57048 3.26734 8.45962 3.31988 8.29368C3.37234 8.12774 3.30875 7.94712 3.16391 7.85067C2.17493 7.19228 1.5845 6.08861 1.5845 4.89838C1.5845 4.45818 1.6652 4.02498 1.82051 3.62135C2.45735 4.32451 3.17633 4.94658 3.96422 5.47544C4.14336 5.59572 4.38601 5.54794 4.50625 5.36884C4.62652 5.18974 4.57875 4.94705 4.39965 4.82681C3.50828 4.22849 2.71141 3.50225 2.0311 2.66826C1.95024 2.56912 1.82582 2.51604 1.6984 2.52568C1.57086 2.53553 1.45622 2.60717 1.39149 2.71752C1.00669 3.37357 0.803287 4.12771 0.803287 4.89841C0.803287 5.85076 1.11313 6.75763 1.66688 7.49583C1.56149 7.44978 1.45719 7.39833 1.35426 7.3415C1.23325 7.2747 1.08594 7.27681 0.966881 7.34704C0.847857 7.41732 0.774811 7.54521 0.774811 7.68345V7.73149C0.774811 9.17669 1.49602 10.4895 2.62324 11.284C2.6209 11.2836 2.61856 11.2832 2.61621 11.2827C2.48086 11.2572 2.34196 11.3048 2.25075 11.4081C2.15957 11.5114 2.12957 11.6552 2.17184 11.7863C2.63016 13.2091 3.77957 14.2718 5.18129 14.648C4.02164 15.3371 2.70711 15.6973 1.32899 15.6973C1.02989 15.6973 0.737115 15.6809 0.433874 15.6472C0.25364 15.6272 0.0830541 15.734 0.0224683 15.905C-0.0381566 16.0761 0.0270776 16.2664 0.17989 16.3643C2.04977 17.5627 4.21328 18.1962 6.43656 18.1962C8.22472 18.1962 9.89831 17.8409 11.4108 17.1401C12.7982 16.4975 14.0241 15.579 15.0545 14.4102C16.9523 12.2575 18.0407 9.40837 18.0407 6.59337C18.0407 6.59033 18.0407 6.58724 18.0406 6.58419L18.0334 6.27662C18.7774 5.71334 19.4163 5.03494 19.9344 4.25771C20.0308 4.11314 20.02 3.92224 19.9081 3.78935Z"
                fill="#F2F2F2"
              />
              <path
                d="M14.7146 11.2899C14.5296 11.1789 14.2896 11.2389 14.1787 11.4239L14.178 11.425C14.067 11.61 14.1273 11.8494 14.3123 11.9604C14.375 11.9981 14.4441 12.016 14.5125 12.016C14.6454 12.016 14.7752 11.948 14.8486 11.8259C14.9596 11.6409 14.8996 11.4009 14.7146 11.2899Z"
                fill="#F2F2F2"
              />
              <path
                d="M13.9525 12.4654C13.7861 12.3282 13.5398 12.3519 13.4026 12.5184C12.7188 13.348 11.9104 14.0325 10.9998 14.553C10.8125 14.66 10.7475 14.8986 10.8545 15.0859C10.9266 15.2121 11.0584 15.2828 11.194 15.2828C11.2597 15.2828 11.3264 15.2662 11.3875 15.2313C12.3804 14.6638 13.2613 13.9182 14.0055 13.0153C14.1427 12.8488 14.119 12.6027 13.9525 12.4654Z"
                fill="#F2F2F2"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.instagram.com/d1ma6/" target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1406 0H5.85938C2.62852 0 0 2.62852 0 5.85938V14.1406C0 17.3715 2.62852 20 5.85938 20H14.1406C17.3715 20 20 17.3715 20 14.1406V5.85938C20 2.62852 17.3715 0 14.1406 0ZM19.2188 14.1406C19.2188 16.9407 16.9407 19.2188 14.1406 19.2188H5.85938C3.0593 19.2188 0.78125 16.9407 0.78125 14.1406V5.85938C0.78125 3.0593 3.0593 0.78125 5.85938 0.78125H14.1406C16.9407 0.78125 19.2188 3.0593 19.2188 5.85938V14.1406Z"
              fill="#F2F2F2"
            />
            <path
              d="M14.1406 1.71875H5.85938C3.57621 1.71875 1.71875 3.57621 1.71875 5.85938V14.1406C1.71875 16.4238 3.57621 18.2812 5.85938 18.2812H8.24219C8.45793 18.2812 8.63281 18.1064 8.63281 17.8906C8.63281 17.6749 8.45793 17.5 8.24219 17.5H5.85938C4.00703 17.5 2.5 15.993 2.5 14.1406V5.85938C2.5 4.00703 4.00703 2.5 5.85938 2.5H14.1406C15.993 2.5 17.5 4.00703 17.5 5.85938V14.1406C17.5 15.993 15.993 17.5 14.1406 17.5H11.7839C11.5681 17.5 11.3932 17.6749 11.3932 17.8906C11.3932 18.1064 11.5681 18.2812 11.7839 18.2812H14.1406C16.4238 18.2812 18.2812 16.4238 18.2812 14.1406V5.85938C18.2812 3.57621 16.4238 1.71875 14.1406 1.71875Z"
              fill="#F2F2F2"
            />
            <path
              d="M10.2762 17.6145C10.2035 17.5418 10.1027 17.5 10 17.5C9.89727 17.5 9.79648 17.5418 9.72383 17.6145C9.65117 17.6871 9.60938 17.7879 9.60938 17.8906C9.60938 17.9934 9.65117 18.0941 9.72383 18.1668C9.79648 18.2395 9.89727 18.2812 10 18.2812C10.1027 18.2812 10.2035 18.2395 10.2762 18.1668C10.3488 18.0941 10.3906 17.9934 10.3906 17.8906C10.3906 17.7879 10.3488 17.6871 10.2762 17.6145Z"
              fill="#F2F2F2"
            />
            <path
              d="M6.86828 6.08241C6.72074 5.92498 6.47359 5.91694 6.31612 6.0644L6.29882 6.08069C6.1419 6.22874 6.13472 6.47596 6.2828 6.63288C6.35964 6.71433 6.4632 6.75542 6.56698 6.75542C6.66316 6.75542 6.75953 6.72011 6.83499 6.6489L6.85027 6.63456C7.00769 6.48706 7.01578 6.23983 6.86828 6.08241Z"
              fill="#F2F2F2"
            />
            <path
              d="M10 4.60938C9.14203 4.60938 8.28813 4.81605 7.53059 5.20707C7.33891 5.30602 7.26371 5.54164 7.36266 5.73336C7.46164 5.92504 7.69727 6.0002 7.88895 5.90129C8.54539 5.56242 9.25566 5.39062 10 5.39062C12.5416 5.39062 14.6094 7.4584 14.6094 10C14.6094 12.5416 12.5416 14.6094 10 14.6094C7.4584 14.6094 5.39062 12.5416 5.39062 10C5.39062 9.20238 5.59746 8.41652 5.98879 7.72742C6.09531 7.53984 6.02961 7.30141 5.84199 7.19484C5.65437 7.08836 5.41598 7.15402 5.30941 7.34164C4.85145 8.14812 4.60938 9.06738 4.60938 10C4.60938 12.9724 7.02762 15.3906 10 15.3906C12.9724 15.3906 15.3906 12.9724 15.3906 10C15.3906 7.02762 12.9724 4.60938 10 4.60938Z"
              fill="#F2F2F2"
            />
            <path
              d="M10 6.48438C8.06148 6.48438 6.48438 8.06148 6.48438 10C6.48438 11.9385 8.06148 13.5156 10 13.5156C11.9385 13.5156 13.5156 11.9385 13.5156 10C13.5156 8.06148 11.9385 6.48438 10 6.48438ZM10 12.7344C8.49227 12.7344 7.26562 11.5077 7.26562 10C7.26562 8.49227 8.49227 7.26562 10 7.26562C11.5077 7.26562 12.7344 8.49227 12.7344 10C12.7344 11.5077 11.5077 12.7344 10 12.7344Z"
              fill="#F2F2F2"
            />
            <path
              d="M15.127 3.38867C14.3085 3.38867 13.6426 4.05457 13.6426 4.87305C13.6426 5.69152 14.3085 6.35742 15.127 6.35742C15.9454 6.35742 16.6113 5.69152 16.6113 4.87305C16.6113 4.05457 15.9454 3.38867 15.127 3.38867ZM15.127 5.57617C14.7393 5.57617 14.4238 5.26074 14.4238 4.87305C14.4238 4.48535 14.7393 4.16992 15.127 4.16992C15.5146 4.16992 15.8301 4.48535 15.8301 4.87305C15.8301 5.26074 15.5146 5.57617 15.127 5.57617Z"
              fill="#F2F2F2"
            />
          </svg>
        </a>
        <a href="https://vk.com/d1ma6z" target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9841 13.3893L16.7859 13.0655C16.3986 12.4329 15.9298 11.8527 15.3926 11.3411L14.7299 10.7101C14.6669 10.6501 14.6575 10.5549 14.7074 10.4837L15.6123 9.1943C15.7428 9.00836 15.8632 8.81254 15.9702 8.6123L16.7434 7.16555C16.8782 6.91344 16.871 6.61645 16.7241 6.37113C16.5773 6.12586 16.3189 5.97918 16.033 5.97887L14.3594 5.97695C14.3591 5.97695 14.3587 5.97695 14.3584 5.97695C14.0078 5.97695 13.6902 6.18434 13.5493 6.50543L13.3721 6.90934C12.9198 7.93984 12.3025 8.87945 11.5366 9.70328V6.75457C11.5366 6.32559 11.1876 5.97656 10.7586 5.97656H8.38828C7.99906 5.97656 7.68246 6.2932 7.68246 6.68242C7.68246 6.83105 7.72828 6.97344 7.81492 7.09406L7.98078 7.32512C8.1434 7.55156 8.22934 7.81863 8.22934 8.09746V10.2521C7.93703 9.91262 7.58113 9.4516 7.27984 8.92156C6.81848 8.10984 6.48777 7.16332 6.33172 6.67133C6.19988 6.25578 5.81848 5.97656 5.38258 5.97656H3.6875C3.44828 5.97656 3.22828 6.08594 3.08375 6.27664C2.93934 6.46738 2.89367 6.70887 2.95855 6.93922L3.27476 8.06148C3.46855 8.74941 3.73496 9.4191 4.06656 10.052C4.16664 10.243 4.40266 10.3168 4.59383 10.2167C4.78496 10.1166 4.85867 9.88051 4.75855 9.68941C4.45211 9.10445 4.2059 8.48547 4.02676 7.84965L3.71914 6.75781H5.38262C5.47648 6.75781 5.55863 6.81797 5.58703 6.90754C5.75238 7.42875 6.10394 8.43371 6.6007 9.30758C7.00828 10.0246 7.50277 10.622 7.8459 10.9968C8.03387 11.2021 8.32309 11.2698 8.58269 11.1688C8.84262 11.0679 9.01059 10.8224 9.01059 10.5436V8.09746C9.01059 7.65414 8.87391 7.22949 8.61543 6.86945L8.53523 6.75781H10.7554V9.89043C10.7554 10.1196 10.8704 10.3304 11.0632 10.4543C11.2559 10.5782 11.4954 10.5954 11.7039 10.5002L11.865 10.4266C11.9392 10.3928 12.0051 10.3456 12.061 10.2863C12.9087 9.38602 13.5905 8.35547 14.0875 7.22324L14.2648 6.81934C14.2811 6.78215 14.3178 6.75816 14.3584 6.75816H14.3585L16.0321 6.76008C16.0379 6.76008 16.0465 6.76012 16.0538 6.77238C16.0612 6.78469 16.0571 6.79227 16.0545 6.7973L15.2812 8.24402C15.189 8.41656 15.0852 8.58527 14.9728 8.74551L14.068 10.0349C13.7941 10.4252 13.8459 10.9471 14.1912 11.2759L14.8538 11.9069C15.3419 12.3716 15.7678 12.8987 16.1197 13.4735L16.3179 13.7973C16.3227 13.805 16.3371 13.8288 16.3191 13.861C16.3011 13.8932 16.2732 13.8932 16.2641 13.8932H14.8193C14.6336 13.8932 14.4529 13.8169 14.3235 13.6838L12.8787 12.1982C12.5382 11.8482 12.1062 11.6077 11.6292 11.503C11.4154 11.4561 11.1947 11.5078 11.024 11.6451C10.8533 11.7824 10.7554 11.9868 10.7554 12.2058V13.6654C10.7554 13.791 10.6532 13.8932 10.5275 13.8932C9.40793 13.8932 8.30156 13.5186 7.41223 12.8384C7.05394 12.5644 6.71223 12.2622 6.39656 11.9402C6.24555 11.7863 5.99824 11.7837 5.84414 11.9348C5.69008 12.0858 5.68766 12.3332 5.83867 12.4872C6.18019 12.8355 6.54992 13.1625 6.93758 13.459C7.96238 14.2428 9.2373 14.6745 10.5275 14.6745C11.0839 14.6745 11.5366 14.2218 11.5366 13.6654V12.2844C11.8341 12.3638 12.1031 12.5213 12.3186 12.743L13.7634 14.2285C14.039 14.5119 14.4239 14.6745 14.8193 14.6745H16.2641C16.5693 14.6745 16.8516 14.5091 17.0007 14.2429C17.1498 13.9766 17.1435 13.6496 16.9841 13.3893Z"
              fill="#F2F2F2"
            />
            <path
              d="M5.47099 10.8419L5.46666 10.8358C5.34092 10.6605 5.09693 10.6203 4.92158 10.746C4.74627 10.8717 4.70603 11.1158 4.83174 11.2911C4.83189 11.2913 4.83424 11.2946 4.83439 11.2948L5.15353 11.0695L4.83607 11.2971C4.91236 11.4035 5.03224 11.4602 5.15388 11.4602C5.23263 11.4602 5.3122 11.4364 5.38115 11.387C5.55646 11.2612 5.5967 11.0172 5.47099 10.8419Z"
              fill="#F2F2F2"
            />
            <path
              d="M8.00244 17.3438H4.81885C4.60314 17.3438 4.42822 17.5186 4.42822 17.7344C4.42822 17.9501 4.60314 18.125 4.81885 18.125H8.00244C8.21818 18.125 8.39307 17.9501 8.39307 17.7344C8.39307 17.5186 8.21814 17.3438 8.00244 17.3438Z"
              fill="#F2F2F2"
            />
            <path
              d="M9.7798 17.3438H9.77515C9.55944 17.3438 9.38452 17.5186 9.38452 17.7344C9.38452 17.9501 9.55944 18.125 9.77515 18.125H9.7798C9.99554 18.125 10.1704 17.9501 10.1704 17.7344C10.1704 17.5186 9.9955 17.3438 9.7798 17.3438Z"
              fill="#F2F2F2"
            />
            <path
              d="M17.4219 0H2.57812C1.15652 0 0 1.15652 0 2.57812V17.4219C0 18.8435 1.15652 20 2.57812 20H17.4219C18.8435 20 20 18.8435 20 17.4219V2.57812C20 1.15652 18.8435 0 17.4219 0ZM19.2188 17.4219C19.2188 18.4127 18.4127 19.2188 17.4219 19.2188H2.57812C1.58734 19.2188 0.78125 18.4127 0.78125 17.4219V2.57812C0.78125 1.58734 1.58734 0.78125 2.57812 0.78125H17.4219C18.4127 0.78125 19.2188 1.58734 19.2188 2.57812V17.4219Z"
              fill="#F2F2F2"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/dmytro.bula.1/" target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.6614C9.78426 14.6614 9.60938 14.8363 9.60938 15.0521C9.60938 15.0526 9.60938 15.0531 9.60938 15.0536C9.60938 15.0541 9.60938 15.0547 9.60938 15.0552V15.0583C9.60938 15.2741 9.78426 15.4489 10 15.4489C10.2157 15.4489 10.3906 15.2741 10.3906 15.0583C10.3906 15.0578 10.3906 15.0573 10.3906 15.0568C10.3906 15.0562 10.3906 15.0557 10.3906 15.0552C10.3906 15.0546 10.3906 15.0541 10.3906 15.0536C10.3906 15.0531 10.3906 15.0526 10.3906 15.0521C10.3906 14.8363 10.2157 14.6614 10 14.6614Z"
              fill="#F2F2F2"
            />
            <path
              d="M16.1719 0H3.82812C1.71727 0 0 1.71727 0 3.82812V16.1719C0 18.2827 1.71727 20 3.82812 20H10C10.2157 20 10.3906 19.8251 10.3906 19.6094V16.582C10.3906 16.3663 10.2157 16.1914 10 16.1914C9.78426 16.1914 9.60938 16.3663 9.60938 16.582V19.2188H3.82812C2.14809 19.2188 0.78125 17.8519 0.78125 16.1719V3.82812C0.78125 2.14809 2.14809 0.78125 3.82812 0.78125H16.1719C17.8519 0.78125 19.2188 2.14809 19.2188 3.82812V16.1719C19.2188 17.8519 17.8519 19.2188 16.1719 19.2188H13.6719V12.3243H15.9368C16.1374 12.3243 16.3054 12.1723 16.3254 11.9727L16.6063 9.18152C16.6174 9.07164 16.5814 8.96227 16.5074 8.88039C16.4333 8.79852 16.328 8.7518 16.2177 8.7518H13.6719V7.28613C13.6719 7.02086 13.7564 6.92223 13.9836 6.92223H16.2001C16.4159 6.92223 16.5907 6.74734 16.5907 6.5316V3.81051C16.5907 3.59477 16.4159 3.41988 16.2001 3.41988H13.2893C11.64 3.41988 10.7653 4.14434 10.322 4.75207C9.70191 5.60199 9.60934 6.60574 9.60934 7.1284V8.7693H7.69527C7.47953 8.7693 7.30465 8.94418 7.30465 9.15992V11.9336C7.30465 12.1493 7.47953 12.3242 7.69527 12.3242H9.60934V13.4375C9.60934 13.6532 9.78422 13.8281 9.99996 13.8281C10.2157 13.8281 10.3906 13.6532 10.3906 13.4375V11.9336C10.3906 11.7179 10.2157 11.543 9.99996 11.543H8.0859V9.55051H9.99996C10.2157 9.55051 10.3906 9.37562 10.3906 9.15988V7.12836C10.3906 6.2482 10.673 4.20109 13.2893 4.20109H15.8095V6.14094H13.9836C13.4794 6.14094 12.8906 6.44086 12.8906 7.28609V9.14238C12.8906 9.35812 13.0655 9.53301 13.2812 9.53301H15.7857L15.5835 11.543H13.2812C13.0655 11.543 12.8906 11.7179 12.8906 11.9336V19.6094C12.8906 19.8251 13.0655 20 13.2812 20H16.1719C18.2827 20 20 18.2827 20 16.1719V3.82812C20 1.71727 18.2827 0 16.1719 0Z"
              fill="#F2F2F2"
            />
            <path
              d="M2.26562 4.00391C2.04988 4.00391 1.875 4.17879 1.875 4.39453V7.65625C1.875 7.87199 2.04988 8.04688 2.26562 8.04688C2.48137 8.04688 2.65625 7.87199 2.65625 7.65625V4.39453C2.65625 4.17879 2.48137 4.00391 2.26562 4.00391Z"
              fill="#F2F2F2"
            />
            <path
              d="M2.26562 8.96021C2.04988 8.96021 1.875 9.13509 1.875 9.35083V9.35544C1.875 9.57118 2.04988 9.74606 2.26562 9.74606C2.48137 9.74606 2.65625 9.57118 2.65625 9.35544V9.35083C2.65625 9.13509 2.48137 8.96021 2.26562 8.96021Z"
              fill="#F2F2F2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default LeftNav;
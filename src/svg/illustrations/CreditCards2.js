import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const CreditCards2 = ({ width = 130, height = 71 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 130 71"
    >
      <path
        fill="#68E1FD"
        d="M11.971 19.465L40.421 2.81a5.9 5.9 0 015.89-.04l50.69 28.775a4 4 0 010 6.905l-27.8 15.95a8.685 8.685 0 01-8.725-.045l-48.535-28.5a3.695 3.695 0 01.03-6.39z"
      ></path>
      <path
        fill="#1E4549"
        d="M11.971 19.465L40.421 2.81a5.9 5.9 0 015.89-.04l50.69 28.775a4 4 0 010 6.905l-27.8 15.95a8.685 8.685 0 01-8.725-.045l-48.535-28.5a3.695 3.695 0 01.03-6.39z"
        opacity="0.33"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M11.729 17.596L40.178.94a5.9 5.9 0 015.89-.04l50.694 28.77a4.001 4.001 0 010 6.904L69 52.531a8.685 8.685 0 01-8.725-.045l-48.535-28.5a3.696 3.696 0 01-.01-6.39z"
      ></path>
      <path
        fill="#fff"
        d="M42.756 4.64l.065.035a1 1 0 01.5.5.54.54 0 01-.165.535l-.55-.325a.276.276 0 000-.245.5.5 0 00-.225-.225h-.025a.885.885 0 00-.5-.11 1.035 1.035 0 00-.53.17.445.445 0 00-.25.335c0 .12.07.22.225.315a1 1 0 00.35.115c.127.024.257.024.385 0l.55.33a1.915 1.915 0 01-.855.125 2 2 0 01-.81-.25l-.055-.03A1.135 1.135 0 0140.5 5.5a.501.501 0 01-.025-.435.875.875 0 01.365-.4 1.69 1.69 0 01.625-.245 1.97 1.97 0 01.705 0c.205.042.403.116.585.22zM44.71 7a1.37 1.37 0 01-.57-.095l-.225.78-.575-.34.245-.735-.12-.07-.705.46-.5-.31 1.87-1.215L45 6c.14.073.261.177.355.305a.33.33 0 01.05.295.5.5 0 01-.215.255 1 1 0 01-.48.145zm-.08-.445c.075-.05.11-.1.105-.155-.005-.055-.06-.115-.16-.175l-.325-.19-.475.305.325.19h.035c.076.044.162.07.25.075a.415.415 0 00.245-.075M49.001 8.945a.826.826 0 01-.35.395 1.565 1.565 0 01-.625.235 2 2 0 01-1.36-.235l-.075-.045-.81-.5 1.875-1.215.805.5c.2.1.371.248.5.43a.502.502 0 01.04.435zm-.875.085c.17-.11.245-.23.225-.355-.02-.125-.125-.25-.325-.37l-.245-.15-1.07.695.245.15h.04c.176.102.373.16.575.17a.97.97 0 00.56-.16M46.04 6.62l1.335.794-.36.235-.815-.49-.395.26.725.43-.34.22-.725-.43-.415.27.81.485-.36.235-1.33-.795 1.87-1.215zM49.89 8.91l.516.31-1.87 1.215-.52-.31L49.89 8.91zM50.626 9.35l1.68 1-.365.23-.58-.345-1.515.98-.52-.31 1.515-.98-.575-.34.36-.235zM54.059 11.374l.065.035a1 1 0 01.5.5.54.54 0 01-.165.535l-.55-.325a.264.264 0 000-.245.5.5 0 00-.225-.225h-.025a.885.885 0 00-.5-.11 1.031 1.031 0 00-.53.17c-.165.106-.25.22-.25.335 0 .115.07.22.225.316.108.06.227.099.35.115.127.023.258.023.385 0l.55.33a1.88 1.88 0 01-.855.125 2 2 0 01-.825-.255h-.04a1.11 1.11 0 01-.425-.405.5.5 0 01-.03-.435.9.9 0 01.365-.4c.19-.123.402-.206.625-.245.233-.042.472-.042.705 0 .226.023.446.085.65.184zM56.628 12.945l-1.075 1.675-.55-.33.21-.3-.805-.5-.5.145-.545-.325 2.645-.74.62.375zm-1.74.42l.535.32.42-.61-.955.285M58.23 15.044c-.194.01-.389-.022-.57-.095l-.225.78-.575-.34.245-.734-.12-.07-.71.46-.5-.31 1.87-1.215.855.53c.139.073.258.178.35.304a.35.35 0 01.055.296.5.5 0 01-.22.25.95.95 0 01-.455.144zm-.325-.37a.424.424 0 00.25-.07c.07-.05.105-.1.1-.16-.005-.06-.06-.115-.16-.175l-.32-.19-.5.31.325.19c.081.048.172.077.265.085M60.904 16a.81.81 0 01-.355.4 1.59 1.59 0 01-.625.235 1.998 1.998 0 01-.715 0 2.255 2.255 0 01-.665-.245l-.055-.03-.805-.5 1.87-1.215.81.5c.199.1.37.247.5.43a.5.5 0 01.04.425zm-.875.084c.166-.11.241-.228.225-.354 0-.13-.125-.25-.325-.37l-.25-.146-1.07.695.25.146h.04c.175.101.372.16.575.17a.97.97 0 00.56-.16M29.645 11.855l.91.545-2.49 1.62-.485-.29 2.115-1.37-.43-.26.38-.245zM32.415 13.45l.05.03c.275.164.43.334.46.5.03.164-.07.34-.295.5a1.819 1.819 0 01-.74.244 5.368 5.368 0 01-1 .045 8.963 8.963 0 01-1-.1l1.35.805-.33.215-2-1.18.295-.19a13.34 13.34 0 001.815.125 2.14 2.14 0 001.09-.215.35.35 0 00.195-.26c0-.09-.075-.185-.235-.28h-.03a.875.875 0 00-.5-.115 1.221 1.221 0 00-.54.175l-.445-.265c.289-.17.62-.255.955-.245.315-.007.626.065.905.21zM37.18 18.34l.405.24-.355.23-.395-.24-.54.35-.465-.276.535-.35-1.445-.86.34-.22 3.055-.22.5.295-1.635 1.05zm-.43-.26l1.145-.74-2.15.144 1 .595M35.16 15.045l.06.035c.155.085.29.203.394.345a.39.39 0 01.065.335.5.5 0 01-.235.28 1 1 0 01-.545.17 1.32 1.32 0 01-.615-.135.75.75 0 01.24.42c0 .13-.078.25-.235.36a1.26 1.26 0 01-.75.19 1.79 1.79 0 01-.82-.245l-.06-.035a1.05 1.05 0 01-.535-.57c-.05-.2.044-.393.28-.58l.455.27a.35.35 0 00-.16.32c0 .115.11.22.28.325h.035c.134.078.286.12.44.125a.745.745 0 00.41-.11c.135-.09.18-.2.135-.32a.965.965 0 00-.425-.385l-.11-.065.335-.215.11.065.09.055a.9.9 0 00.955.085c.115-.075.165-.155.15-.245a.43.43 0 00-.235-.26h-.035a.94.94 0 00-.425-.12 1 1 0 00-.5.11l-.45-.27c.258-.148.553-.22.85-.205.301.022.593.114.85.27zM46.328 23.11c0 .19-.114.37-.38.545a1.43 1.43 0 01-.535.21c-.206.039-.418.039-.624 0a1.81 1.81 0 01-.58-.205l-.07-.04c-.416-.245-.586-.5-.5-.72.141-.318.386-.58.694-.74.374-.26.801-.43 1.25-.5.378-.043.758.038 1.086.23l.06.035c.275.165.425.34.434.5a.605.605 0 01-.274.5l-.436-.26c.23-.21.2-.395-.08-.566h-.024a1.035 1.035 0 00-.65-.12c-.296.053-.577.17-.82.346l-.115.08a1.14 1.14 0 01.564-.04c.192.028.377.09.545.185h.04c.264.183.402.37.416.56zm-.81.285c.17-.11.245-.22.236-.34-.01-.12-.11-.23-.285-.335h-.03a1.259 1.259 0 00-.5-.15.83.83 0 00-.53.125.414.414 0 00-.23.34c0 .126.1.25.3.37h.03c.152.086.324.134.5.14a.891.891 0 00.5-.145M42.79 19.635l1.834 1.095-.36.23-1.41-.84-.74.5c.152-.007.304.01.45.05.149.038.291.096.425.17h.03c.161.084.294.213.386.37a.41.41 0 010 .365.862.862 0 01-.316.32c-.263.17-.57.26-.884.26-.318.003-.631-.08-.905-.24l-.066-.04a1 1 0 01-.5-.565.5.5 0 01.255-.54l.456.27a.329.329 0 00-.126.3.5.5 0 00.255.29h.03a1 1 0 00.526.135c.178-.012.35-.07.5-.17.15-.1.224-.2.214-.315-.01-.115-.1-.22-.275-.325h-.025a1.152 1.152 0 00-.37-.135 1.092 1.092 0 00-.39 0l-.444-.265 1.45-.92zM51.501 26.6a.5.5 0 01-.255.344 1.31 1.31 0 01-.86.19 2.269 2.269 0 01-.915-.29l-.06-.035a1.155 1.155 0 01-.565-.59c-.06-.205.03-.385.275-.54a1.08 1.08 0 01.545-.175c.223-.01.445.022.655.095a.443.443 0 01-.15-.355.45.45 0 01.23-.305 1 1 0 01.45-.15c.194-.021.39-.008.58.04.2.049.391.124.57.225l.065.035c.175.093.327.223.445.38a.416.416 0 01-.125.645.999.999 0 01-.475.155 1.554 1.554 0 01-.58-.08.5.5 0 01.17.41zm-.69.06c.15-.096.2-.2.16-.316a.72.72 0 00-.335-.335h-.04a1.332 1.332 0 00-.5-.165.77.77 0 00-.5.11c-.14.095-.195.2-.17.315a.63.63 0 00.325.345h.04c.162.095.343.15.53.165a.774.774 0 00.5-.12h-.01zm.01-1.41c-.125.084-.175.174-.15.274a.55.55 0 00.285.3h.04c.14.08.295.128.455.14a.684.684 0 00.44-.105c.125-.085.175-.175.15-.28a.575.575 0 00-.285-.3h-.04a1.077 1.077 0 00-.455-.14.705.705 0 00-.445.105M48.313 22.96l1.885 1.12-.305.2-3.265.796-.48-.29 3.235-.755-1.415-.845.345-.225zM62.612 31.866a1.46 1.46 0 01-.685.745 2.87 2.87 0 01-1.175.46 1.735 1.735 0 01-1.09-.225l-.06-.035c-.38-.225-.535-.46-.47-.7a1.5 1.5 0 01.69-.75c.35-.24.75-.398 1.17-.46a1.73 1.73 0 011.085.23l.06.035c.365.22.54.455.475.7zm-1.145.47a1.5 1.5 0 00.53-.5c.075-.15 0-.29-.24-.425h-.04a.915.915 0 00-.655-.11 2.33 2.33 0 00-.775.35 1.5 1.5 0 00-.54.5c-.075.15 0 .29.245.43h.025a.935.935 0 00.675.115c.278-.073.542-.193.78-.355M59.25 29.484l.916.545-2.495 1.62-.486-.29 2.116-1.375-.425-.25.375-.25zM58.104 29.12a1.5 1.5 0 01-.685.73 3.152 3.152 0 01-1.24.5c-.372.05-.75-.025-1.075-.215l-.055-.03c-.28-.165-.435-.345-.455-.53a.59.59 0 01.26-.5l.435.26a.351.351 0 00-.15.295.41.41 0 00.235.28h.025a1 1 0 00.645.12 2 2 0 00.825-.345l.12-.08a1.259 1.259 0 01-.575.04 1.634 1.634 0 01-.545-.185h-.04c-.28-.166-.427-.345-.44-.535 0-.19.115-.37.375-.54.164-.106.348-.179.54-.215a1.797 1.797 0 011.205.21l.07.04c.42.225.59.465.525.7zm-.79.225a.414.414 0 00.23-.34c0-.125-.1-.25-.3-.37h-.03a1.07 1.07 0 00-.5-.135.89.89 0 00-.5.15c-.17.11-.245.22-.235.34.01.12.105.23.28.335h.025c.099.054.205.095.315.12.127.021.257.021.385 0a.735.735 0 00.345-.12M65.523 33.6a1.455 1.455 0 01-.684.746 2.779 2.779 0 01-1.175.46 1.715 1.715 0 01-1.075-.225l-.07-.04c-.375-.225-.535-.455-.475-.7a1.5 1.5 0 01.695-.75c.35-.24.75-.397 1.17-.46a1.75 1.75 0 011.09.23l.06.035c.376.23.531.465.465.705zm-1.144.47c.218-.117.402-.29.534-.5.066-.15 0-.29-.24-.424h-.03a.94.94 0 00-.67-.12 2.43 2.43 0 00-.774.35c-.218.12-.404.292-.54.5-.07.145 0 .29.245.43h.04c.196.118.43.158.654.11.28-.07.544-.19.78-.355M31.579 19.65l-1.175 1.85-.41-.244.27-.4-1-.6-.635.185-.41-.245 2.92-.805.44.26zm-1.95.5l.79.47.58-.87-1.365.396M28.538 17.8l1.545.916-.265.175-2.68.32 1.155.69-.275.175-1.575-.94.255-.17 2.675-.33-1.105-.66.27-.175zM27.759 17.336l.385.225-2.08 1.35-.38-.225 2.075-1.35zM26.262 16.44l.38.224-1.815 1.18.82.49-.26.17-1.205-.715 2.08-1.35zM24.523 15.404l1.36.81-.275.18-.975-.585-.63.41.88.52-.26.17-.88-.52-.645.415.98.58-.275.18-1.36-.81 2.08-1.35zM38.4 23.67l.38.225-.87.565 1.12.67.87-.565.385.225-2.08 1.35-.385-.23.935-.605-1.12-.665-.93.605-.385-.23 2.08-1.345zM36.406 22.48l1.705 1.02-.265.175-.665-.395-1.81 1.17-.385-.23 1.805-1.174-.66-.39.275-.175zM34.848 21.555l1.36.81-.27.175-.975-.58-.63.41.875.52-.26.17-.875-.525-.645.42.975.585-.275.175-1.355-.81 2.075-1.35zM33.171 22.03a.36.36 0 01-.195.29 1 1 0 01-.605.15 1.55 1.55 0 01-.665-.21l-.06-.035-.945-.564 2.08-1.35.925.55a.82.82 0 01.41.415c.035.14-.03.26-.19.364a.87.87 0 01-.44.136 1.175 1.175 0 01-.475-.08.395.395 0 01.16.334zm-.545.03c.105-.064.145-.144.125-.23a.5.5 0 00-.255-.26l-.5-.284-.66.43.5.29a.954.954 0 00.4.13.576.576 0 00.36-.085l.03.01zm.23-1.345l-.62.4.475.28h.035c.107.063.227.1.35.11a.57.57 0 00.34-.084.21.21 0 00.12-.21c0-.075-.1-.16-.24-.245l-.46-.275M54.396 33.195l.76.455L53.08 35l-.405-.245 1.765-1.14-.36-.215.315-.205zM58.903 35.01l.375.225-4.215 1.59-.37-.22 4.21-1.595zM59.566 36.226h.035c.23.14.355.28.38.425.026.145-.06.285-.245.405a1.55 1.55 0 01-.62.205c-.274.037-.552.049-.83.035a7.125 7.125 0 01-.85-.085l1.13.67-.275.175-1.644-1 .25-.16c.497.068.998.103 1.5.105.313.02.627-.042.91-.18.104-.07.164-.14.164-.215 0-.075-.06-.155-.194-.235h-.03a.715.715 0 00-.395-.09.999.999 0 00-.445.145l-.37-.22c.238-.142.512-.213.79-.205.26.013.515.09.74.225zM56.368 34.324l.045.025c.23.14.355.28.38.425.025.145-.055.285-.245.405-.19.112-.4.182-.62.205a4.42 4.42 0 01-.83.035 7.574 7.574 0 01-.845-.08l1.125.67-.27.175-1.655-1 .25-.16c.497.069.998.104 1.5.105.314.02.628-.041.91-.18.11-.07.165-.14.165-.22 0-.08-.065-.155-.195-.235a.754.754 0 00-.41-.1 1.083 1.083 0 00-.45.145l-.37-.22a1.46 1.46 0 01.795-.205c.253.011.5.083.72.21zM60.803 36.97l1.526.91-.296.19-1.175-.694-.62.4c.127-.007.253.007.376.04s.243.082.355.145h.03a.77.77 0 01.32.305.33.33 0 010 .305.704.704 0 01-.26.265c-.219.143-.474.22-.735.22a1.5 1.5 0 01-.76-.2l-.05-.03a.826.826 0 01-.43-.47.44.44 0 01.214-.45l.38.225a.261.261 0 00-.1.25.395.395 0 00.215.24h.03c.13.077.28.115.43.11a.845.845 0 00.435-.14c.125-.085.185-.17.18-.26-.005-.09-.08-.185-.23-.27h-.024a.92.92 0 00-.305-.11.79.79 0 00-.325 0l-.376-.225 1.196-.755zM90.538 33.34l.43.255-.84.545 1.63-.07.515.305-1.82.055-.05 1.16-.515-.31.065-1.025-.86.555-.425-.255 1.87-1.215zM88.342 32.03l.425.254-.325 1.4 1.28-.83.43.255-1.875 1.215-.425-.255.315-1.395-1.27.825-.43-.255 1.875-1.215zM87.299 31.44l-1.065 1.67-.45-.27.215-.34-.86-.5-.5.154-.455-.27 2.635-.73.48.285zm-1.75.44l.63.374.475-.7-1.105.325M84.721 31.205a.345.345 0 01-.18.26.9.9 0 01-.55.135 1.43 1.43 0 01-.6-.19l-.06-.035-.915-.545 1.87-1.215.9.535c.215.13.345.255.375.375.03.12-.025.235-.175.33a.76.76 0 01-.39.125 1.039 1.039 0 01-.42-.07.36.36 0 01.145.295zm-.845.035a.445.445 0 00.28-.07c.085-.055.115-.115.1-.18-.015-.065-.08-.13-.2-.2l-.4-.24-.5.335.405.24h.035c.09.05.188.081.29.09l-.01.025zm.545-1.2l-.5.315.38.225a.654.654 0 00.285.09.414.414 0 00.26-.065c.075-.05.11-.105.1-.165-.01-.06-.075-.125-.185-.19l-.38-.225"
      ></path>
      <path
        fill="#F8C401"
        d="M38.278 7.46L40.898 9l-.44.285-4.6-1.295-.21-.125.705-.455a2 2 0 011.88 0l.045.05zM40.688 9.371l.38-.245-.085-.05 1.13.67-.026.02-1.4-.395zM39.304 10.06L35.86 8.017l4.605 1.29-1.16.755z"
      ></path>
      <path
        fill="#F15A24"
        d="M35.653 7.89l.205.126 3.445 2.045-.15.095-3.645-2.17.07-.05.075-.045z"
      ></path>
      <path
        fill="#F8C401"
        d="M40.689 9.371l1.4.395-1.57 1.02-1.05-.625 1.22-.79z"
      ></path>
      <path
        fill="#F15A24"
        d="M42.197 9.796l.085.05-1.745 1.135-1.215-.725.145-.095 1.05.625 1.57-1.02.025-.02.085.05z"
      ></path>
      <path
        fill="#F8C401"
        d="M33.718 9.14L35.498 8l3.645 2.175-1.806 1.17-3.65-2.17.03-.035z"
      ></path>
      <path
        fill="#F15A24"
        d="M40.983 9.075l.085.05-.38.245-1.22.79-.145.095-1.805 1.175-.17-.1 1.805-1.175.15-.095 1.16-.755.435-.285.085.055z"
      ></path>
      <path
        fill="#F8C401"
        d="M33.849 10.336c-.5-.295-.605-.75-.28-1.07l3.63 2.16-.73.475-2.62-1.565z"
      ></path>
      <path
        fill="#F15A24"
        d="M37.35 11.33l.17.1 1.05.62-.15.1-1.05-.625-.165-.1L33.57 9.26l-.015-.01.14-.09 3.655 2.17zM36.473 11.896l.73-.47.165.1-.725.47-.005.005-.165-.105z"
      ></path>
      <path
        fill="#F8C401"
        d="M36.645 11.995l.724-.47 1.05.625-.73.47-1.044-.625zM39.849 11.426l.845.5-1.995 1.295.084.05-.93-.55 1.995-1.295z"
      ></path>
      <path
        fill="#F15A24"
        d="M39.833 11.23l1.175.7-1.266.82-.15.1-.724.47-.086-.05-.084-.05 1.995-1.295-.846-.5-1.995 1.295-.164-.1.73-.47.15-.1 1.265-.82z"
      ></path>
      <path
        fill="#F8C401"
        d="M43.695 10.685c.56.34.625.87.125 1.195l-2.635 1.71-1.425-.85 1.265-.82-1.175-.7-1.265.82-1.05-.625 1.805-1.17 1.215.725L42.3 9.835l-.085-.05 1.48.9z"
      ></path>
      <path
        fill="#F15A24"
        d="M41.169 13.6l-.075.05-.075.045-.015-.01-1.41-.835.15-.1 1.425.85z"
      ></path>
      <path
        fill="#F8C401"
        d="M38.869 13.32l.73-.474 1.405.835a2.07 2.07 0 01-1.7-.105h-.04l-.5-.29.105.035z"
      ></path>
      <path
        fill="#F15A24"
        d="M60.975 46.866c2.24 0 4.055-1.124 4.055-2.51 0-1.387-1.816-2.51-4.055-2.51-2.24 0-4.055 1.123-4.055 2.51 0 1.386 1.815 2.51 4.055 2.51z"
      ></path>
      <path
        fill="#FBB03B"
        d="M64.659 48.866c2.239 0 4.054-1.124 4.054-2.51 0-1.387-1.815-2.51-4.054-2.51-2.24 0-4.056 1.123-4.056 2.51 0 1.386 1.816 2.51 4.056 2.51z"
      ></path>
      <path
        fill="#BA3D3A"
        d="M42.071 19.17L70.501 2.5a5.9 5.9 0 015.89-.04l50.695 28.77a3.995 3.995 0 011.98 3.452 4.004 4.004 0 01-1.98 3.452l-27.8 15.95a8.685 8.685 0 01-8.725-.045l-48.535-28.5a3.694 3.694 0 01.045-6.37z"
      ></path>
      <path
        fill="#DD5E57"
        d="M42.071 17.596L70.501.94a5.9 5.9 0 015.89-.04l50.695 28.77a3.995 3.995 0 011.98 3.452 4.004 4.004 0 01-1.98 3.453l-27.8 15.95a8.685 8.685 0 01-8.685-.026L42.066 24a3.694 3.694 0 01.005-6.404z"
      ></path>
      <path
        fill="#fff"
        d="M71.711 6.066l.05.025a1 1 0 01.5.525.53.53 0 01-.16.54l-.55-.33a.245.245 0 000-.24.5.5 0 00-.22-.225.935.935 0 00-.5-.115 1.05 1.05 0 00-.53.17c-.165.105-.245.215-.245.335a.366.366 0 00.22.31h.035a1 1 0 00.34.11c.129.025.261.025.39 0l.55.325c-.27.11-.564.152-.855.125a1.945 1.945 0 01-.81-.245l-.055-.03a1.09 1.09 0 01-.43-.405.5.5 0 01-.03-.435.93.93 0 01.365-.4 1.72 1.72 0 01.625-.245 2 2 0 011.32.22l-.01-.015z"
      ></path>
      <path
        fill="#F8C401"
        d="M69.631 10.785l1.4.395-1.57 1.015-1.045-.62 1.215-.79zM68.245 11.475l-3.43-2.045 4.59 1.29-1.16.755z"
      ></path>
      <path
        fill="#F15A24"
        d="M64.594 9.3l.22.13 3.43 2.046-.145.095-3.65-2.17.145-.1zM71.06 11.16l.165.1-1.745 1.135-1.21-.725.145-.095 1.044.62 1.57-1.015.03-.02z"
      ></path>
      <path
        fill="#F8C401"
        d="M62.664 10.555l1.785-1.16 3.65 2.17-1.805 1.17-3.65-2.175.02-.005z"
      ></path>
      <path
        fill="#F15A24"
        d="M69.843 10.44l.17.1-.385.245-1.215.79-.145.094-1.805 1.175-.17-.105 1.805-1.17.145-.095 1.16-.755.44-.28z"
      ></path>
      <path
        fill="#F8C401"
        d="M66.144 12.835l-.73.475.085.05-2.71-1.615c-.5-.3-.6-.75-.275-1.075l3.63 2.165z"
      ></path>
      <path
        fill="#F15A24"
        d="M66.297 12.741l.17.105 1.045.62-.15.095-1.045-.62-.17-.105-3.63-2.16-.015-.01.14-.09 3.655 2.165z"
      ></path>
      <path
        fill="#F15A24"
        d="M65.414 13.31l.73-.474.17.105-.73.47-.085-.05-.085-.05z"
      ></path>
      <path
        fill="#F8C401"
        d="M67.359 13.56l-.73.474.085.045-1.13-.67.73-.47 1.045.62zM68.794 12.84l.84.5-1.995 1.295.085.05-.925-.55 1.995-1.295z"
      ></path>
      <path
        fill="#F15A24"
        d="M68.774 12.64l1.18.706-1.27.82-.145.095-.73.475-.085-.05-.085-.05 1.995-1.295-.84-.5-1.995 1.295-.085-.055-.085-.045.73-.475.15-.095 1.265-.825z"
      ></path>
      <path
        fill="#F8C401"
        d="M72.635 12.1c.57.34.625.875.13 1.19L70.13 15l-1.425-.85 1.27-.82-1.175-.7-1.3.835-1.045-.625 1.805-1.17 1.215.72 1.745-1.13-.17-.1h-.03l-1.4-.395.38-.245-.17-.1-.44.285-4.59-1.29-.22-.13.705-.455a2 2 0 011.88 0h.04l5.43 3.27z"
      ></path>
      <path
        fill="#F15A24"
        d="M70.11 15.016l-.076.05-.07.045-.015-.01-1.41-.84.145-.095 1.425.85z"
      ></path>
      <path
        fill="#F8C401"
        d="M67.81 14.735l.73-.475 1.41.84a2.065 2.065 0 01-1.7-.105h-.04l-.4-.26z"
      ></path>
      <path
        fill="#fff"
        d="M73.655 8.41a1.395 1.395 0 01-.57-.094l-.23.78-.57-.34.245-.735-.12-.07-.705.46-.5-.305L73.08 6.89l.88.525c.14.074.262.18.355.31a.326.326 0 01.05.295.5.5 0 01-.22.25.92.92 0 01-.49.14zm-.08-.444c.075-.05.105-.1.1-.16-.005-.06-.065-.115-.165-.175l-.32-.19-.47.31.32.19a.57.57 0 00.265.08.42.42 0 00.25-.07M87.17 16.46a1.367 1.367 0 01-.57-.096l-.23.78-.57-.34.245-.735-.12-.07-.71.46-.5-.305 1.875-1.214.885.53c.139.074.26.178.355.304a.346.346 0 01.05.295.5.5 0 01-.22.25.92.92 0 01-.49.14zm-.08-.446c.075-.05.11-.1.1-.16-.01-.06-.06-.114-.16-.174l-.325-.19-.47.31.32.19c.08.048.171.077.265.084a.44.44 0 00.245-.075M85.575 14.36L84.5 16.03l-.555-.325.205-.305-.8-.5-.47.145-.55-.325L85 14l.575.36zm-1.745.425l.535.32.425-.605-.955.285M83.001 12.796l.05.03a1 1 0 01.5.5.53.53 0 01-.16.54l-.55-.33a.245.245 0 000-.24.5.5 0 00-.22-.225.935.935 0 00-.5-.115 1.05 1.05 0 00-.53.17.45.45 0 00-.245.335.365.365 0 00.22.31h.035a.999.999 0 00.34.11c.129.024.261.024.39 0l.55.325c-.27.109-.564.152-.855.125a1.943 1.943 0 01-.81-.245l-.055-.03a1.09 1.09 0 01-.43-.405.498.498 0 01-.025-.435.87.87 0 01.365-.4c.19-.123.403-.206.625-.245a2 2 0 011.325.22l-.02.005zM77.955 10.36a.82.82 0 01-.35.395A1.632 1.632 0 0177 11a2.003 2.003 0 01-.72 0 2.25 2.25 0 01-.66-.245l-.055-.03-.805-.5 1.87-1.215.805.5c.2.1.371.247.5.43a.5.5 0 01.02.42zm-.875.085c.166-.11.241-.229.225-.355 0-.13-.13-.25-.33-.375l-.245-.145-1.07.695.245.145h.04c.173.101.369.16.57.17a.95.95 0 00.565-.155M78.828 10.324l.52.31-1.875 1.215-.52-.31 1.875-1.215zM79.564 10.766l1.68.995-.36.235-.58-.345-1.514.98-.52-.31 1.51-.98-.57-.345.355-.23zM74.986 8.035l1.33.795-.36.23-.815-.485-.39.255.725.43-.345.225-.725-.435-.415.27.815.485-.36.24-1.335-.795 1.875-1.215zM89.844 17.44a.825.825 0 01-.35.395c-.19.12-.403.2-.625.235a2.003 2.003 0 01-1.365-.235l-.07-.04-.805-.5 1.87-1.215.805.5c.2.1.372.247.5.43a.5.5 0 01.04.43zm-.875.085c.17-.11.245-.23.23-.36-.015-.13-.13-.25-.33-.37l-.245-.15-1.07.695.24.145h.04c.175.102.373.158.575.165a.94.94 0 00.56-.155M66.124 19.755l.395.24-.35.23-.4-.235-.535.345-.465-.275.535-.35-1.445-.86.335-.22 3.055-.22.5.295-1.625 1.05zm-.435-.255l1.145-.745-2.145.145 1 .595M64.091 16.45l.07.04c.157.084.293.202.4.345a.391.391 0 01.065.335.525.525 0 01-.24.28 1.03 1.03 0 01-.545.165 1.315 1.315 0 01-.615-.13.745.745 0 01.245.415c0 .13-.065.25-.235.365a1.29 1.29 0 01-.75.19c-.29-.015-.573-.1-.825-.245l-.06-.035a1.035 1.035 0 01-.53-.57c-.053-.2.04-.394.28-.58l.455.27a.345.345 0 00-.165.32.498.498 0 00.28.325c.139.08.295.127.455.135a.71.71 0 00.41-.11c.14-.09.185-.195.135-.315a1.001 1.001 0 00-.42-.39l-.11-.065.33-.215.11.065.08.045a.915.915 0 00.975.09c.113-.077.163-.16.15-.25 0-.09-.095-.175-.23-.26a1 1 0 00-.95-.02l-.455-.27a1.58 1.58 0 01.85-.2c.298.021.586.114.84.27zM61.362 14.864l.05.03c.275.165.43.335.46.5.03.165-.07.34-.295.5a1.851 1.851 0 01-.745.245c-.332.046-.666.06-1 .045a8.94 8.94 0 01-1-.1l1.35.805-.33.215-2-1.175.295-.195a13.09 13.09 0 001.815.13 2.18 2.18 0 001.09-.22.371.371 0 00.195-.26c0-.09-.075-.185-.235-.28a.894.894 0 00-.5-.12c-.19.016-.373.076-.535.175l-.45-.265c.289-.17.62-.254.955-.245.306 0 .608.073.88.215zM58.585 13.27l.915.545-2.495 1.62-.48-.29 2.115-1.375-.43-.255.375-.245zM71.728 21.05l1.83 1.09-.355.23-1.41-.84-.74.5a1.679 1.679 0 01.855.21l.055.03c.163.083.297.212.385.37a.411.411 0 010 .366.896.896 0 01-.31.32 1.68 1.68 0 01-.885.265 1.8 1.8 0 01-.915-.245l-.055-.03a.966.966 0 01-.5-.565.5.5 0 01.25-.535l.455.27a.314.314 0 00-.12.3.5.5 0 00.255.29h.03a1 1 0 00.525.135 1 1 0 00.5-.165c.15-.1.22-.205.215-.315-.005-.11-.105-.22-.275-.325a1.173 1.173 0 00-.375-.135 1.052 1.052 0 00-.39 0l-.45-.27 1.425-.95zM77.26 24.375l1.885 1.12-.305.195-3.265.8-.485-.29 3.235-.755-1.41-.845.345-.225zM75.269 24.5c0 .19-.115.37-.38.546a1.5 1.5 0 01-.54.215 1.714 1.714 0 01-.625 0 1.949 1.949 0 01-.6-.22l-.05-.03c-.41-.245-.585-.5-.5-.725a1.5 1.5 0 01.69-.735 3.03 3.03 0 011.25-.5c.376-.04.754.043 1.08.235l.06.035c.28.165.425.34.435.5a.606.606 0 01-.275.5l-.44-.26c.23-.21.2-.4-.08-.57a1.035 1.035 0 00-.65-.12 2.05 2.05 0 00-.82.34l-.115.08a1.22 1.22 0 01.565-.04c.193.028.379.09.55.185h.04c.26.203.395.391.405.565zm-.81.286c.165-.11.245-.22.23-.34-.015-.12-.105-.23-.28-.335a1.275 1.275 0 00-.5-.155.81.81 0 00-.53.12.42.42 0 00-.23.34c0 .126.1.25.3.37h.035c.152.087.324.136.5.14a.88.88 0 00.5-.145M80.445 28a.5.5 0 01-.255.345c-.257.16-.56.229-.86.195a2.271 2.271 0 01-.9-.285l-.076-.045a1.135 1.135 0 01-.565-.59c-.06-.205.03-.385.275-.545.164-.104.352-.165.545-.175.223-.01.445.022.656.095a.429.429 0 01-.15-.355.446.446 0 01.23-.3 1.04 1.04 0 01.45-.155 1.72 1.72 0 01.58.045c.2.047.391.123.57.225l.06.035a1.5 1.5 0 01.45.38.467.467 0 01.094.36.45.45 0 01-.22.285c-.15.095-.322.149-.5.155a1.42 1.42 0 01-.58-.075.546.546 0 01.196.405zm-.69.06c.145-.095.195-.2.154-.315a.686.686 0 00-.33-.335h-.04a1.38 1.38 0 00-.5-.165.745.745 0 00-.5.11c-.145.095-.2.2-.17.32a.63.63 0 00.325.345h.04c.162.095.344.151.53.165a.785.785 0 00.5-.12l-.01-.005zm.01-1.405c-.13.08-.18.175-.15.275a.55.55 0 00.285.3h.04c.14.08.297.13.46.145a.685.685 0 00.44-.105c.13-.08.18-.175.15-.28a.545.545 0 00-.285-.3h-.04a1.09 1.09 0 00-.45-.14.695.695 0 00-.44.11M91.55 33.275a1.47 1.47 0 01-.68.745 2.82 2.82 0 01-1.175.46 1.72 1.72 0 01-1.09-.225l-.06-.035c-.375-.225-.53-.455-.47-.695a1.5 1.5 0 01.69-.755c.352-.24.754-.398 1.175-.46a1.74 1.74 0 011.085.23l.06.035c.373.224.528.457.465.7zm-1.145.47c.218-.118.402-.29.535-.5.07-.145 0-.29-.24-.425h-.04a.93.93 0 00-.66-.115 2.41 2.41 0 00-.77.355 1.5 1.5 0 00-.54.5c-.07.145 0 .29.245.43h.04c.197.119.43.158.655.11.28-.07.544-.19.78-.355M88.194 30.9l.91.545-2.495 1.62-.48-.29 2.115-1.375-.43-.255.38-.245zM87.042 30.534a1.47 1.47 0 01-.68.73 3.145 3.145 0 01-1.245.5 1.674 1.674 0 01-1.075-.21l-.055-.03c-.285-.17-.43-.345-.455-.535a.564.564 0 01.26-.5l.435.26a.35.35 0 00-.155.295.43.43 0 00.235.28c.197.11.426.153.65.12.297-.053.578-.17.825-.345l.115-.08a1.22 1.22 0 01-.57.04 1.618 1.618 0 01-.55-.185h-.04c-.275-.165-.42-.345-.435-.535-.015-.19.11-.375.375-.54a1.54 1.54 0 01.54-.215c.208-.04.422-.04.63 0 .209.037.41.11.595.215l.055.03c.44.23.61.47.545.705zm-.785.225a.431.431 0 00.235-.34c0-.125-.1-.25-.3-.37a1.095 1.095 0 00-.5-.145.91.91 0 00-.5.15c-.165.11-.245.22-.235.34.01.12.105.23.275.33h.025c.215.117.46.17.705.15a.785.785 0 00.345-.12M94.47 35a1.46 1.46 0 01-.686.744c-.352.24-.753.398-1.175.46A1.735 1.735 0 0191.5 36l-.06-.035c-.38-.225-.534-.46-.47-.7a1.5 1.5 0 01.69-.75 2.84 2.84 0 011.17-.46c.378-.043.758.038 1.086.23l.06.035c.404.22.56.45.495.68zm-1.145.47a1.5 1.5 0 00.53-.5c.075-.15 0-.29-.24-.43h-.025a.945.945 0 00-.67-.116c-.278.07-.54.188-.776.35a1.5 1.5 0 00-.54.5c-.075.15 0 .29.246.43h.025c.2.121.44.163.67.115a2.46 2.46 0 00.78-.355M55.2 17.85l.38.23-1.815 1.18.82.49-.26.17-1.2-.72 2.075-1.35zM56.7 18.75l.39.23-2.08 1.345-.385-.23L56.7 18.75zM53.464 16.82l1.365.81-.275.175-.975-.58-.63.405.875.525-.26.165-.875-.52-.645.42.975.58-.27.18-1.36-.81 2.075-1.35zM60.499 21.06l-1.17 1.85-.41-.245.265-.4-1-.595-.635.18-.41-.245 2.92-.81.44.265zm-1.95.5l.785.47.575-.865-1.365.395M57.484 19.215l1.54.915-.26.17-2.685.325 1.16.69-.275.175-1.585-.945.265-.165 2.67-.33-1.105-.66.275-.175zM62.116 23.445a.37.37 0 01-.2.296 1 1 0 01-.61.15 1.606 1.606 0 01-.68-.22l-.045-.026-.94-.564 2.075-1.35.93.554c.24.14.375.28.41.416.035.134-.035.255-.195.36a.84.84 0 01-.435.14c-.16.004-.32-.023-.47-.08a.416.416 0 01.16.325zm-.55.03c.105-.07.145-.145.125-.23-.02-.085-.105-.17-.25-.26l-.5-.284-.665.43.5.29h.04c.117.068.249.11.385.125a.575.575 0 00.36-.085l.005.015zm.25-1.355l-.62.405.47.286c.112.066.239.106.37.114.118.01.235-.02.335-.085.095-.06.135-.13.12-.21-.015-.08-.095-.16-.235-.244l-.465-.276M67.339 25.08l.38.23-.87.565 1.12.665.87-.565.39.23-2.08 1.35-.385-.23.93-.605-1.115-.665-.935.605-.38-.23 2.075-1.35zM65.344 23.895l1.71 1.015-.27.18-.665-.4-1.805 1.174-.39-.23 1.805-1.17-.655-.394.27-.175zM63.79 22.97l1.36.81-.27.176-.975-.58-.63.41.875.515-.26.17-.875-.52-.64.42.97.58-.27.18-1.36-.81 2.075-1.35zM85.325 35.744h.035c.23.14.355.28.38.43.025.15-.055.28-.24.405a1.55 1.55 0 01-.62.205 4.42 4.42 0 01-.83.035 7.086 7.086 0 01-.85-.085l1.13.67-.275.175-1.645-1 .25-.16c.497.071.998.106 1.5.105.314.021.628-.04.91-.18.11-.07.165-.14.165-.215 0-.075-.06-.155-.195-.235h-.03a.716.716 0 00-.395-.09 1 1 0 00-.445.145l-.37-.22c.239-.142.513-.213.79-.205.26.013.511.088.735.22zM88.5 37.63l.05.03c.235.14.36.28.385.43.025.15-.055.28-.245.405-.19.11-.402.178-.62.2-.278.037-.56.049-.84.035a7.17 7.17 0 01-.84-.085l1.125.67-.275.18-1.65-1 .245-.16c.497.069.998.104 1.5.105.314.019.628-.045.91-.185a.31.31 0 00.165-.215c0-.075-.06-.155-.195-.235h-.03a.695.695 0 00-.395-.09 1 1 0 00-.45.145l-.375-.225c.24-.14.516-.212.795-.205.26.004.514.072.74.2zM89.74 38.38l1.53.91-.295.196-1.175-.7-.615.4c.126-.007.253.007.375.04.122.032.24.079.35.14h.03c.136.07.249.177.325.31a.35.35 0 010 .305.757.757 0 01-.26.265 1.37 1.37 0 01-.74.22 1.5 1.5 0 01-.755-.2l-.05-.03a.805.805 0 01-.43-.47.431.431 0 01.215-.45l.38.225a.264.264 0 00-.105.255.421.421 0 00.215.24.845.845 0 00.445.115.9.9 0 00.44-.14c.12-.08.185-.17.175-.265-.01-.095-.085-.18-.23-.27a1.028 1.028 0 00-.31-.11.862.862 0 00-.325 0l-.37-.22 1.18-.765zM87.849 36.426l.375.22-4.215 1.595-.37-.22 4.21-1.595zM83.341 34.61l.76.454-2.08 1.345-.4-.24 1.76-1.145-.355-.21.315-.205zM119.479 34.756l.425.25-.835.55 1.63-.075.515.31-1.825.055-.045 1.155-.515-.305.06-1.03-.855.56-.425-.255 1.87-1.215zM117.281 33.445l.425.255-.325 1.4 1.285-.83.425.255-1.87 1.21-.425-.25.31-1.4-1.265.83-.435-.255 1.875-1.215zM116.246 32.856l-1.065 1.645-.45-.27.225-.335-.855-.5-.53.155-.45-.27 2.64-.73.485.305zm-1.75.44l.63.375.47-.7-1.1.325zM113.665 32.62a.335.335 0 01-.18.26.873.873 0 01-.555.135 1.42 1.42 0 01-.615-.195l-.045-.025-.915-.545 1.87-1.215.9.535c.215.13.34.255.375.38.035.125 0 .23-.175.33a.765.765 0 01-.39.12 1.004 1.004 0 01-.42-.07.351.351 0 01.15.29zm-.845.04a.443.443 0 00.28-.07c.085-.055.115-.115.1-.18a.37.37 0 00-.195-.2l-.405-.24-.5.335.405.245a.753.753 0 00.3.1l.015.01zm.52-1.19l-.5.315.385.23a.692.692 0 00.28.095.422.422 0 00.265-.065c.075-.05.11-.105.095-.165-.015-.06-.075-.125-.185-.195l-.38-.225"
      ></path>
      <path
        fill="#F15A24"
        d="M89.92 48.28c2.24 0 4.055-1.124 4.055-2.51 0-1.387-1.815-2.51-4.055-2.51-2.24 0-4.055 1.123-4.055 2.51 0 1.386 1.816 2.51 4.055 2.51z"
      ></path>
      <path
        fill="#FBB03B"
        d="M93.604 50.28c2.24 0 4.055-1.124 4.055-2.51 0-1.387-1.816-2.51-4.055-2.51-2.24 0-4.055 1.123-4.055 2.51 0 1.386 1.815 2.51 4.055 2.51z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="46.391"
          x2="56.676"
          y1="50.086"
          y2="31.581"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="0.99" stopColor="#552800"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="10625.2"
          x2="10907.9"
          y1="2749.35"
          y2="2125.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="0.99" stopColor="#552800"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

CreditCards2.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default CreditCards2;
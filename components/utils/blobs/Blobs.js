import styles from '../../../styles/components/blobs.module.scss';

const Blobs = () => {
  const { blob1, blob2, blob3, blob4 } = styles;

  return (
    <>
      <div className={blob1}>
        <img src="./blobs/blob1.png" alt="" />
      </div>

      <div className={blob2}>
        <svg width="1125" height="215" viewBox="0 0 1125 215" fill="none">
          <path
            d="M1190.76 -316.107C1306.83 -243.593 1336.27 -129.777 1275.27 -41.7621C1214.04 46.2169 1062.15 108.246 875.501 123.191C688.866 138.024 467.483 105.66 306.727 36.7524C146.183 -32.0069 46.2833 -137.422 40.9819 -225.618C35.4499 -313.849 124.765 -384.938 245.084 -419.782C365.634 -454.59 517.19 -453.153 694.519 -436.68C871.848 -420.207 1074.49 -388.77 1190.76 -316.107Z"
            fill="#69F2D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className={blob3}>
        <svg width="956" height="1527" viewBox="0 0 956 1527" fill="none">
          <path
            d="M774.229 844.321C743.834 1001.8 615.073 1167.62 461.086 1214.5C307.099 1261.38 128.087 1189.72 -46.0982 1133.65C-220.417 1077.9 -390.145 1037.86 -449.333 935.791C-508.857 833.637 -457.943 669.258 -368.831 553.538C-279.619 438.02 -152.341 371.48 -11.1907 277.02C130.294 182.647 285.652 60.3541 401.253 74.3486C516.754 88.1401 592.164 238.132 664.19 387.779C735.982 537.543 804.523 686.642 774.229 844.321Z"
            fill="#F0F5FD"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      <div className={blob4}>
        <svg
          width="803"
          height="1405"
          viewBox="0 0 803 1405"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M590.793 221.843C743.139 171.709 950.673 203.427 1066.6 315.096C1182.53 426.766 1207.11 618.014 1242.96 797.456C1279.15 976.859 1326.82 1144.6 1266.49 1246C1206.25 1347.74 1037.89 1383.31 893.422 1361.83C749.083 1340.15 628.988 1261.39 477.751 1184.1C326.427 1106.48 143.962 1030.33 99.8935 922.547C55.6968 814.949 149.984 676.045 245.618 540.265C341.468 404.633 438.32 272.165 590.793 221.843Z"
            fill="#EBF0FC"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </>
  );
};

export default Blobs;

export const BlobsOther = () => {
  const { navBlob, blob5, blob6 } = styles;

  return (
    <>
      <div className={navBlob}>
        <svg width="1440" height="190" viewBox="0 0 1440 190" fill="none">
          <path
            d="M2144.2 111.047L2040.49 120.227C1936.75 129.569 1729.33 147.929 1521.81 166.937C1314.3 185.944 1106.69 205.6 907.065 167.926C707.435 130.253 515.78 35.2499 319.709 -28.0112C123.639 -91.2724 -76.8025 -123.116 -177.045 -138.876L-277.266 -154.798L-219.372 -571L-118.881 -557.022C-18.39 -543.043 182.592 -515.086 383.573 -487.13C584.555 -459.173 785.536 -431.216 986.518 -403.259C1187.5 -375.302 1388.48 -347.345 1589.46 -319.389C1790.44 -291.432 1991.43 -263.475 2091.92 -249.496L2192.41 -235.518L2144.2 111.047Z"
            fill="#69F2D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>
      <div className={blob5}>
        <svg width="956" height="1527" viewBox="0 0 956 1527" fill="none">
          <path
            d="M774.229 844.321C743.834 1001.8 615.073 1167.62 461.086 1214.5C307.099 1261.38 128.087 1189.72 -46.0982 1133.65C-220.417 1077.9 -390.145 1037.86 -449.333 935.791C-508.857 833.637 -457.943 669.258 -368.831 553.538C-279.619 438.02 -152.341 371.48 -11.1907 277.02C130.294 182.647 285.652 60.3541 401.253 74.3486C516.754 88.1401 592.164 238.132 664.19 387.779C735.982 537.543 804.523 686.642 774.229 844.321Z"
            fill="#F0F5FD"
            fillOpacity="0.7"
          />
        </svg>
      </div>
      <div className={blob6}>
        <svg width="803" height="1405" viewBox="0 0 803 1405" fill="none">
          <path
            d="M590.793 221.843C743.139 171.709 950.673 203.427 1066.6 315.096C1182.53 426.766 1207.11 618.014 1242.96 797.456C1279.15 976.859 1326.82 1144.6 1266.49 1246C1206.25 1347.74 1037.89 1383.31 893.422 1361.83C749.083 1340.15 628.988 1261.39 477.751 1184.1C326.427 1106.48 143.962 1030.33 99.8935 922.547C55.6968 814.949 149.984 676.045 245.618 540.265C341.468 404.633 438.32 272.165 590.793 221.843Z"
            fill="#69F2D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </>
  );
};

export const BlobsAbout = () => {
  const { navBlob, blob4, blob7, blob8, blob9 } = styles;

  return (
    <>
      <div className={navBlob}>
        <svg width="1440" height="190" viewBox="0 0 1440 190" fill="none">
          <path
            d="M2144.2 111.047L2040.49 120.227C1936.75 129.569 1729.33 147.929 1521.81 166.937C1314.3 185.944 1106.69 205.6 907.065 167.926C707.435 130.253 515.78 35.2499 319.709 -28.0112C123.639 -91.2724 -76.8025 -123.116 -177.045 -138.876L-277.266 -154.798L-219.372 -571L-118.881 -557.022C-18.39 -543.043 182.592 -515.086 383.573 -487.13C584.555 -459.173 785.536 -431.216 986.518 -403.259C1187.5 -375.302 1388.48 -347.345 1589.46 -319.389C1790.44 -291.432 1991.43 -263.475 2091.92 -249.496L2192.41 -235.518L2144.2 111.047Z"
            fill="#69F2D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>
      <div className={blob7}>
        <svg width="956" height="1527" viewBox="0 0 956 1527" fill="none">
          <path
            d="M774.229 844.321C743.834 1001.8 615.073 1167.62 461.086 1214.5C307.099 1261.38 128.087 1189.72 -46.0982 1133.65C-220.417 1077.9 -390.145 1037.86 -449.333 935.791C-508.857 833.637 -457.943 669.258 -368.831 553.538C-279.619 438.02 -152.341 371.48 -11.1907 277.02C130.294 182.647 285.652 60.3541 401.253 74.3486C516.754 88.1401 592.164 238.132 664.19 387.779C735.982 537.543 804.523 686.642 774.229 844.321Z"
            fill="#F0F5FD"
            fillOpacity="0.7"
          />
        </svg>
      </div>
      <div className={blob8}>
        <svg width="803" height="1405" viewBox="0 0 803 1405" fill="none">
          <path
            d="M590.793 221.843C743.139 171.709 950.673 203.427 1066.6 315.096C1182.53 426.766 1207.11 618.014 1242.96 797.456C1279.15 976.859 1326.82 1144.6 1266.49 1246C1206.25 1347.74 1037.89 1383.31 893.422 1361.83C749.083 1340.15 628.988 1261.39 477.751 1184.1C326.427 1106.48 143.962 1030.33 99.8935 922.547C55.6968 814.949 149.984 676.045 245.618 540.265C341.468 404.633 438.32 272.165 590.793 221.843Z"
            fill="#EBF0FC"
            fillOpacity="0.6"
          />
        </svg>
      </div>
      {/* <div className={blob9}>
        <svg width="956" height="1527" viewBox="0 0 956 1527" fill="none">
          <path
            d="M774.229 844.321C743.834 1001.8 615.073 1167.62 461.086 1214.5C307.099 1261.38 128.087 1189.72 -46.0982 1133.65C-220.417 1077.9 -390.145 1037.86 -449.333 935.791C-508.857 833.637 -457.943 669.258 -368.831 553.538C-279.619 438.02 -152.341 371.48 -11.1907 277.02C130.294 182.647 285.652 60.3541 401.253 74.3486C516.754 88.1401 592.164 238.132 664.19 387.779C735.982 537.543 804.523 686.642 774.229 844.321Z"
            fill="#69F2D9"
            fillOpacity="0.15"
          />
        </svg>
      </div> */}
      <div className={blob4}>
        <svg
          width="803"
          height="1405"
          viewBox="0 0 803 1405"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M590.793 221.843C743.139 171.709 950.673 203.427 1066.6 315.096C1182.53 426.766 1207.11 618.014 1242.96 797.456C1279.15 976.859 1326.82 1144.6 1266.49 1246C1206.25 1347.74 1037.89 1383.31 893.422 1361.83C749.083 1340.15 628.988 1261.39 477.751 1184.1C326.427 1106.48 143.962 1030.33 99.8935 922.547C55.6968 814.949 149.984 676.045 245.618 540.265C341.468 404.633 438.32 272.165 590.793 221.843Z"
            fill="#69F2D9"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </>
  );
};
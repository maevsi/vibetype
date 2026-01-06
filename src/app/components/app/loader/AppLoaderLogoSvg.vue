<template>
  <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      class="piece p1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M268.034 256.632L285.202 336.274C288.603 352.05 301.917 363.757 318.011 365.122L401.57 372.21L409.589 401.866C411.02 407.155 410.01 412.807 406.836 417.276L322.172 536.464C317.548 542.975 309.241 545.752 301.625 543.332L170.01 501.519C165.162 499.979 161.17 496.499 158.986 491.908L100.78 369.569C97.2722 362.197 99.0597 353.395 105.166 347.972L213.239 251.984L268.034 256.632Z"
      fill="#70E884"
    />

    <path
      class="piece p2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M464.896 178.115C462.411 170.28 455.015 165.051 446.793 165.315L343.261 168.647L292.387 240.395L361.475 246.254C376.871 247.56 389.805 258.352 393.835 273.256L414.497 349.66L490.695 309.305C498.535 305.153 502.284 295.995 499.603 287.544L464.896 178.115Z"
      fill="#FF3167"
    />

    <path
      class="piece p3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M166.209 68.4988C168.996 60.2291 177.225 55.0628 185.891 56.142L294.161 69.6249C301.679 70.5612 307.851 76.0135 309.702 83.3543L328.465 157.764L271.158 238.584L213.382 233.582L141.592 182.303C135.017 177.607 132.287 169.169 134.866 161.516L166.209 68.4988Z"
      fill="#0467F1"
    />

    <path
      class="piece p4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M303.16 332.41L287.201 258.375L359.919 264.543C367.617 265.196 374.084 270.591 376.099 278.043L396.466 353.357L319.564 346.834C311.517 346.151 304.86 340.298 303.16 332.41Z"
      fill="#FFE504"
    />
  </svg>
</template>

<style scoped>
/* stylelint-disable plugin/no-unsupported-browser-features */
.piece {
  transform-origin: center;
  animation: float-in 1.8s ease-in-out infinite;
}

.p1 {
  animation-delay: 0s;
}

.p2 {
  animation-delay: 150ms;
}

.p3 {
  animation-delay: 300ms;
}

.p4 {
  animation-delay: 450ms;
}

@keyframes float-in {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }

  40% {
    opacity: 1;
    transform: scale(1.03) translateY(-6px);
  }

  70% {
    transform: scale(0.99) translateY(2px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

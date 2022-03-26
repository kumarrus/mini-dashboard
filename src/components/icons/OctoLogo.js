import * as React from 'react'

function SvgOctoLogo({ title, titleId, ...props }) {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1503.13 1389.15"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : "octo_logo"}
      <defs>
          <style>{`.cls-1,.cls-2,.cls-4,.cls-6{fill:#333652;}.cls-2,.cls-3{fill-rule:evenodd;}.cls-3{fill:#e7625f;}.cls-4{isolation:isolate;font-size:210.25px;font-family:Helvetica-Bold, Helvetica;}.cls-4,.cls-6{font-weight:700;}.cls-5{letter-spacing:-0.02em;}.cls-6{font-size:102.95px;font-family:Calibri-Bold, Calibri;}.cls-7{letter-spacing:-0.01em;}`}</style>
      </defs>
      <path className="cls-1" d="M1425.36,54.85l0-24.17L486.47,34l-.06,286h6.8l1.86-278.38,920.54-1.1.07,14.46L512.46,61.13l3.13,258.8h12L529.3,79.05l886.5,3.19,1.13,237.7h8.14l.27-237.66,12,0,2.13,237.62h22.15l1.83-265.34Zm20.12,938.76-914.55-8.14-.14-12.57,893.53-1,.28-250.13h-5.8l1.16,244.7L530.64,959.1l-2.53-237.34H514.25l-4.14,237.18-12.87-.11-3-237.07H485.8L485.3,973l24.57,0-.66,38.09,947.71-6.52,1.94-282.73h-15.8Z" transform="translate(-220.37 -30.68)" />
      <path className="cls-2" d="M1461.58,438.22,1243,219.6c-45.09-45.09-118.88-45.09-164,0L860.37,438.22c-.59.58-1,1.28-1.57,1.87a69.36,69.36,0,0,0-9.62-1,70.44,70.44,0,0,0-70.31,70.31c0,36.45,28.07,66.22,63.66,69.64.07.13.11.27.19.4l.35-.35c2,.2,4,.63,6.1.63a70.44,70.44,0,0,0,70.31-70.32c0-2-.43-3.94-.59-5.93l222.28-221.74a28.31,28.31,0,0,1,39.6,0l218.62,218.62a28.31,28.31,0,0,1,0,39.6L1180.77,758.6a28.29,28.29,0,0,1-39.6,0L1033.34,650.77,971,712.8l108,108c45.08,45.09,118.87,45.09,164,0l218.62-218.62C1506.67,557.06,1506.67,483.31,1461.58,438.22Z" transform="translate(-220.37 -30.68)" />
      <path className="cls-3" d="M1106.28,449.87A68.57,68.57,0,0,0,1037,530.39L808.21,758.61a28.29,28.29,0,0,1-39.6,0L550,540a28.29,28.29,0,0,1,0-39.6L768.62,281.76a28.31,28.31,0,0,1,39.6,0L916.05,389.59l62.31-62-108-108c-45.08-45.09-118.86-45.09-163.94,0L487.83,438.22c-45.11,45.09-45.11,118.86,0,163.95L706.45,820.79c45.1,45.08,118.86,45.08,163.94,0L1089,602.17a114.22,114.22,0,0,0,10.41-12.37,67.52,67.52,0,0,0,6.86.7,70.32,70.32,0,1,0,0-140.63Z" transform="translate(-220.37 -30.68)" />
      <text className="cls-4" transform="translate(0 1204.12)">
          OC
          <tspan className="cls-5" x="315.37" y="0">T</tspan>
          <tspan x="440.1" y="0">OSQUARE</tspan>
      </text>
      <text className="cls-6" transform="translate(143.49 1353.21)">
          SCIENTIFICS AND SU
          <tspan className="cls-7" x="862.45" y="0">R</tspan>
          <tspan x="919.6" y="0">GICALS</tspan>
      </text>
  </svg>
  )
}

export default SvgOctoLogo

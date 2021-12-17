export const icon = {
  _logo: "logo",
};

export function Icons ( type, width, color ){
    console.log('inside')
  switch (type) {
      case icon._logo:
        console.log('must Return')
      return (
          <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          viewBox="0 0 1.000000 1.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1.000000) scale(0.100000,-0.100000)"
            fill={color}
            stroke="none"
          ></g>
        </svg>

      );
  }
};

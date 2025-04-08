import classNames from 'classnames';

import { Icon } from '.';

export const CountryFlagIcon = ({ className }: Partial<Icon>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={classNames(className)}
    >
      <path
        d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
        fill="#ECE9E0"
      />
      <path
        d="M12 0.75C5.787 0.75 0.75 5.787 0.75 12C0.75 18.213 5.787 23.25 12 23.25C18.213 23.25 23.25 18.213 23.25 12C23.25 5.787 18.213 0.75 12 0.75ZM2.04375 8.67188V12H1.5C1.5 10.8371 1.69312 9.71887 2.04375 8.67188ZM4.62825 15.3251L3.465 14.7881L3.15 16.056L2.83463 14.7881L1.99238 15.177C1.971 15.1095 1.9515 15.0409 1.93125 14.9726L2.4405 14.2819L1.671 13.8761C1.65862 13.8094 1.64588 13.743 1.635 13.6755L2.58075 13.6508L2.32875 12.3686L3.15 13.3695L3.97087 12.3686L3.71887 13.6508L4.99388 13.6845L3.85913 14.2822L4.62825 15.3251ZM12 4.62525V5.36212H8.9025L12 9.23438V10.1779L8.1015 5.36212H5.889L11.2624 12H9.7875L5.3625 6.46875V12H4.25625V4.917C4.46677 4.68711 4.68736 4.46664 4.91738 4.25625H12V4.62525ZM12 2.04375H8.6715C9.74427 1.6836 10.8684 1.49996 12 1.5V2.04375ZM18.7185 6.83737L19.3748 7.63875L20.0317 6.83737L19.83 7.863L20.85 7.89038L19.9425 8.3685L20.5579 9.20288L19.6279 8.77312L19.3748 9.7875L19.1227 8.7735L18.1924 9.20325L18.8081 8.36887L17.9002 7.89075L18.9202 7.86337L18.7185 6.83737ZM16.8701 11.4157L15.9398 10.986L15.6877 12L15.435 10.9856L14.505 11.4154L15.1204 10.5806L14.2129 10.1029L15.2329 10.0751L15.0311 9.04988L15.6881 9.85087L16.3444 9.04988L16.143 10.0751L17.163 10.1029L16.2551 10.5806L16.8701 11.4157ZM20.5575 16.5776L19.6275 16.1483L19.3748 17.1619L19.1227 16.1483L18.1924 16.5776L18.8081 15.7432L17.9002 15.2651L18.9202 15.2381L18.7185 14.2125L19.3748 15.0131L20.0317 14.2125L19.83 15.2377L20.85 15.2648L19.9425 15.7429L20.5575 16.5776Z"
        fill="#928A76"
      />
    </svg>
  );
};

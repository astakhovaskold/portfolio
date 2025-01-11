import {IconType} from 'react-icons';

import {
    HiArrowUpRight,
    HiCalendarDays,
    HiCheck,
    HiCheckCircle,
    HiChevronDown,
    HiChevronLeft,
    HiChevronRight,
    HiChevronUp,
    HiEnvelope,
    HiExclamationCircle,
    HiExclamationTriangle,
    HiInformationCircle,
    HiMiniGlobeAsiaAustralia,
    HiMiniQuestionMarkCircle,
    HiMiniXMark,
    HiOutlineArrowPath,
    HiOutlineLink,
} from 'react-icons/hi2';

import {
    PiBookBookmarkDuotone,
    PiGridFourDuotone,
    PiHouseDuotone,
    PiImageDuotone,
    PiUserCircleDuotone,
} from 'react-icons/pi';

import {FaDiscord, FaGithub, FaLinkedin, FaXTwitter} from 'react-icons/fa6';

export const iconLibrary: Record<string, IconType> = {
    chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
    chevronRight: HiChevronRight,
    chevronLeft: HiChevronLeft,
    refresh: HiOutlineArrowPath,
    arrowUpRight: HiArrowUpRight,
    check: HiCheck,
    helpCircle: HiMiniQuestionMarkCircle,
    infoCircle: HiInformationCircle,
    warningTriangle: HiExclamationTriangle,
    errorCircle: HiExclamationCircle,
    checkCircle: HiCheckCircle,
    email: HiEnvelope,
    globe: HiMiniGlobeAsiaAustralia,
    person: PiUserCircleDuotone,
    grid: PiGridFourDuotone,
    book: PiBookBookmarkDuotone,
    close: HiMiniXMark,
    openLink: HiOutlineLink,
    calendar: HiCalendarDays,
    home: PiHouseDuotone,
    gallery: PiImageDuotone,
    discord: FaDiscord,
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaXTwitter,
};

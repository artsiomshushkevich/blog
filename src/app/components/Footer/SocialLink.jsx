import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const SocialLink = ({ type }) => {
    let icon = null;
    let ariaLabel = '';
    let href = '';

    switch (type) {
        case 'github': {
            icon = faGithub;
            ariaLabel = 'Github';
            href = 'https://github.com/artsiomshushkevich';
            break;
        }

        case 'linkedin': {
            icon = faLinkedinIn;
            ariaLabel = 'LinkedIn';
            href = 'https://www.linkedin.com/in/artsiom-shushkevich/';
            break;
        }

        default:
            break;
    }

    return (
        <a
            className='inline-flex p-3 border text-white border-white rounded-full'
            aria-label={ariaLabel}
            href={href}
            target='_blank'
        >
            <FontAwesomeIcon className='text-xl' aria-hidden icon={icon} />
        </a>
    );
};

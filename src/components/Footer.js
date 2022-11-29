import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


import '../styles/footer_styles.css';

export default function Footer() {
  const links = [
    {
        id: 1,
        child: (
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/monty-williams-304943172/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
               Github <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/MontyWilliams'
    },
    {
        id: 3,
        child: (
            <>
               Twitter <FaTwitter size={30} />
            </>
        ),
        href: "https://twitter.com/63MontyWilliams",
        style: 'rounded-br-md',
    }
]

return (
  <div className="footer_con">
      <ul > 
          {links.map((link) => (
            <li key={link.id} >
              <a className="link" href={link.href}>
                {link.child}
              </a>
            </li>
          ))}
      </ul>

  </div>
)
}

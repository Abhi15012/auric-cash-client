"use client";
import Image from "next/image";
import styled from "styled-components";

import React from "react";

const ContactCard = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [scrollTimeout, setScrollTimeout] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      const newTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
      setScrollTimeout(newTimeout);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <StyledWrapper
      style={{
        transition: "all 0.3s",
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="card">
        <ul>
          {/* whatsapp */}
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a
              href="https://wa.me/+918142659346"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                className="pb hover:scale-105"
                width={30}
                height={30}
              />
            </a>
          </li>
          {/* phone */}
          <li className="iso-pro phone-item lg:hidden ">
            <span />
            <span />
            <span />
            <a
              href="tel:+919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/phone-call.png"
                alt="Phone"
                className="s phone-icon sm:hidden md:block  hover:scale-105"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: fit-content;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    /* Enhanced glass morphism effect */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  }

  .card ul {
    padding: 1.5rem;
    display: flex;
    list-style: none;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card ul li {
    cursor: pointer;
    position: relative;
  }

  .card ul li a {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .card ul li:hover a {
    transform: scale(1.2);
  }

  .svg {
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    fill: currentColor;
    /* Enhanced glass morphism for icons */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  /* Added gold color for phone icon */
  .phone-item .phone-icon {
    filter: sepia(1) saturate(2) hue-rotate(35deg) brightness(1.2);
  }

  /*isometric projection*/
  .iso-pro {
    transition: transform 0.3s ease;
  }

  .iso-pro:hover .text {
    opacity: 1;
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    /* Enhanced glass morphism for spans */
    background: rgba(24, 119, 242, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(24, 119, 242, 0.3);
    border-radius: 50%;
    transition: opacity 0.3s ease, transform 0.3s ease;
    height: 60px;
    width: 60px;
  }
`;

export default ContactCard;

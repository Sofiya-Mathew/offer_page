document.addEventListener('DOMContentLoaded', () => {
    // Set default selected offer
    const defaultOffer = document.querySelector('.default-active');
    if (defaultOffer) {
        const radioButton = defaultOffer.querySelector('.offer-radio');
        if (radioButton) radioButton.checked = true;
        defaultOffer.click();
    }
});

// Event handler for banner clicks
const handleBannerClick = (banner) => {
    const radioButton = banner.querySelector('.offer-radio');
    if (radioButton) radioButton.checked = true;

    // Update all banners
    document.querySelectorAll('.offer-banner').forEach(bannerItem => {
        bannerItem.classList.remove('selected');
        bannerItem.querySelector('.extra-content')?.classList.remove('active');
        const discountSection = bannerItem.querySelector('.discount-section');
        if (discountSection) discountSection.style.display = 'block';
        const discountSectionToggled = bannerItem.querySelector('.discount-sectionToggled');
        if (discountSectionToggled) discountSectionToggled.style.display = 'none';
    });

    // Update the clicked banner
    banner.classList.add('selected');
    const extraContent = banner.querySelector('.extra-content');
    if (extraContent) extraContent.classList.add('active');
    const discountSection = banner.querySelector('.discount-section');
    if (discountSection) discountSection.style.display = 'none';
    const discountSectionToggled = banner.querySelector('.discount-sectionToggled');
    if (discountSectionToggled) discountSectionToggled.style.display = 'block';
};

// Attach click event listeners to each banner
document.querySelectorAll('.offer-banner').forEach(banner => {
    banner.addEventListener('click', () => handleBannerClick(banner));
});

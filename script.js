function checkEligibility() {
  var age = parseInt(document.getElementById('age').value);
  var province = document.getElementById('province').value;
  var incomeInput = document.getElementById('income').value;
  var income = incomeInput !== '' ? parseInt(incomeInput) : 0; // Treat empty input as 0
  var indigenous = document.getElementById('indigenous').checked;
  var veteran = document.getElementById('veteran').checked;
  var disability = document.getElementById('disability').checked;
  var refugee = document.getElementById('refugee').checked;

  var result = document.getElementById('result');
  var ctaContainer = document.getElementById('ctaContainer');
  var eligiblePrograms = [];

  if (age < 12 && income < 90000) {
    eligiblePrograms.push('<a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/dental-benefit.html">Canada Dental Benefits</a>');
  }

  if (indigenous) {
    eligiblePrograms.push('<a href="https://www.sac-isc.gc.ca/eng/1579538771806/1579538804799">Dental benefits for First Nations and Inuit</a>');
  }

  if (veteran) {
    eligiblePrograms.push('<a href="https://www.veterans.gc.ca/eng/about-vac/legislation-policies/policies/document/1925">Dental benefits under Veterans Affairs Canada</a>');
  }

  if (refugee) {
    eligiblePrograms.push('<a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html">Dental benefits under Interim Federal Health Program</a>');
  }

  if (province === 'Ontario') {
    if (age < 17 && income < 24930) {
      eligiblePrograms.push('<a href="https://www.health.gov.on.ca/en/pro/programs/dental/">Healthy Smile Ontario</a>');
    }

    if (age > 65) {
      eligiblePrograms.push('<a href="https://www.ontario.ca/page/dental-care-low-income-seniors">Ontario Seniors Dental Care Program</a>');
    }

    if (disability) {
      eligiblePrograms.push('<a href="https://www.ontario.ca/page/ontario-disability-support-program-health-and-disability-benefits">Dental benefits under ODSP</a>');
    }
  }

  if (province === 'British Columbia') {
    if (disability && age >= 18) {
      eligiblePrograms.push('<a href="https://www2.gov.bc.ca/gov/content/family-social-supports/services-for-people-with-disabilities/disability-assistance">Benefits under Income and Disability Assistance Program</a>');
    }

    if (age < 19 && income < 42000) {
      eligiblePrograms.push('<a href="https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/organizational-structure/ministries-organizations/social-development-poverty-reduction/healthy-kids.pdf">Dental benefits under Healthy Kids Program</a>');
    }
  }

  if (eligiblePrograms.length > 0) {
    result.innerHTML = 'You may be eligible for the following dental benefits:<br>' + eligiblePrograms.join('<br>');
    ctaContainer.innerHTML = '<button class="cta-button"><a href="https://www.hellodent.com/site/home" style="color: white; text-decoration: none;">Schedule an Appointment</a></button>';
  } else {
    result.innerHTML = 'You may not be eligible for any specific dental benefits.';
    ctaContainer.innerHTML = '';
  }
}

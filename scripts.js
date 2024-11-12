function suggestCareers() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const grade = document.getElementById('grade').value;
    const averageGrade = parseFloat(document.getElementById('average-grade').value);
    const interestCategory = document.getElementById('interest-category').value;
    const learningStyle = document.getElementById('learning-style').value;
    const careerGoals = document.getElementById('career-goals').value;
    
    const subjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(el => el.value);
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value);
    const workPreferences = Array.from(document.querySelectorAll('input[name="work-preferences"]:checked')).map(el => el.value);
    const technicalSkills = Array.from(document.querySelectorAll('input[name="technical-skills"]:checked')).map(el => el.value);
    const softSkills = Array.from(document.querySelectorAll('input[name="soft-skills"]:checked')).map(el => el.value);

    const suggestions = document.getElementById('suggestions');

    // Initialize careerOptions and fieldScope based on interest category
    let careerOptions = '';
    let fieldScope = '';

    if (interestCategory === 'STEM') {
        careerOptions = `
            <li>Bachelor's in Engineering (Mechanical, Electrical, Computer Science)</li>
            <li>Bachelor's in Data Science, Computer Science, or Biotechnology</li>
        `;
        fieldScope = `STEM fields are excellent for those interested in analytical and technical work. Given your preference for ${learningStyle} learning, you could explore roles in engineering, data analysis, or scientific research.`;

    } else if (interestCategory === 'Commerce' || interestCategory === 'Finance') {
        careerOptions = averageGrade > 75 ? `
            <li>B.Com with a specialization in Finance or Accounting</li>
            <li>BBA in Business Administration, Marketing, or International Business</li>
            <li>Chartered Accountancy (CA) or Certified Financial Planner (CFP)</li>
        ` : `
            <li>Diploma in Accounting, Sales and Marketing</li>
            <li>Certificate in Financial Literacy or Business Essentials</li>
        `;
        fieldScope = `Commerce and Finance offer pathways in business, finance, and management. Since your learning style is ${learningStyle}, consider careers in ${learningStyle === 'Hands-on' ? 'practical finance roles like accounting or marketing' : learningStyle === 'Visual' ? 'financial analysis with data visualization tools' : 'business administration and project management'}.`;

    } else if (interestCategory === 'Humanities') {
        careerOptions = `
            <li>B.A. in History, Political Science, or Sociology</li>
            <li>B.A. in International Relations, Journalism, or Social Work</li>
            <li>Certificate courses in Cultural Studies or Community Development</li>
        `;
        fieldScope = `Humanities provide a broad understanding of human society, culture, and communication. With your interest in ${interestCategory} and learning preference for ${learningStyle}, careers in ${learningStyle === 'Reading/Writing' ? 'research, writing, or journalism' : 'social work, public policy, or international relations'}.`;

    } else if (interestCategory === 'Arts') {
        careerOptions = `
            <li>Bachelor's in Fine Arts, Music, or Performing Arts</li>
            <li>Certificate in Digital Media, Animation, or Graphic Design</li>
            <li>Courses in Fashion Design, Interior Design, or Photography</li>
        `;
        fieldScope = `Arts and creative fields allow for self-expression and innovation. Since you enjoy ${hobbies.join(', ')}, roles in design, multimedia, and visual arts might align well with your creative and aesthetic skills.`;

    } else if (interestCategory === 'Health & Medicine') {
        careerOptions = averageGrade > 70 ? `
            <li>MBBS, Nursing, or Bachelor’s in Pharmacy</li>
            <li>B.Sc in Biomedical Science or Public Health</li>
            <li>Allied Health programs (e.g., Physiotherapy, Medical Lab Technology)</li>
        ` : `
            <li>Diploma in Nursing, Health Technician, or Medical Assistant</li>
            <li>Certificate in Healthcare Administration</li>
        `;
        fieldScope = `Healthcare is a highly rewarding field focused on helping others. With your preference for ${learningStyle}, you could find satisfaction in roles that combine practical and empathetic skills, such as nursing, medical research, or public health.`;

    } else if (interestCategory === 'Social Sciences') {
        careerOptions = `
            <li>Bachelor's in Psychology, Sociology, or Anthropology</li>
            <li>Bachelor's in Public Policy or Criminology</li>
            <li>Certificate courses in Social Work or Counseling</li>
        `;
        fieldScope = `Social Sciences focus on understanding human behavior and society. With your ${learningStyle} style, roles in psychology, community service, or counseling may suit your interest in understanding and working with people.`;

    } else if (interestCategory === 'Business') {
        careerOptions = `
            <li>Bachelor's in Business Administration, Marketing, or Management</li>
            <li>Diploma in Entrepreneurship, E-commerce, or Supply Chain Management</li>
            <li>Certificate in Business Analytics or Human Resources</li>
        `;
        fieldScope = `Business careers are dynamic and often involve problem-solving and strategic thinking. Given your work preferences, you may enjoy roles in business management, entrepreneurship, or operations that allow for creativity, analysis, and leadership.`;

    } else if (interestCategory === 'Design & Fashion') {
        careerOptions = `
            <li>Degree in Fashion Design, Interior Design, or Graphic Design</li>
            <li>Certificate in Digital Fashion, Visual Merchandising, or Animation</li>
            <li>Workshops in Product Design or Sustainable Fashion</li>
        `;
        fieldScope = `Design and Fashion are highly creative fields that value aesthetic skills. Since your hobbies include ${hobbies.join(', ')}, explore careers in fashion design, digital media, or product design, where you can combine technical skills with creativity.`;

    } else if (interestCategory === 'Law') {
        careerOptions = `
            <li>LLB (Bachelor of Laws)</li>
            <li>Bachelor's in Criminology or Political Science</li>
            <li>Certificate in Paralegal Studies or International Law</li>
        `;
        fieldScope = `Law involves critical thinking, problem-solving, and a strong understanding of societal systems. With your learning preference of ${learningStyle}, consider careers in litigation, corporate law, or policy analysis.`;

    } else if (interestCategory === 'Psychology') {
        careerOptions = `
            <li>Bachelor's in Psychology, Counseling, or Social Work</li>
            <li>Certificate in Behavioral Science or Mental Health</li>
            <li>Diploma in Child Development or Neuropsychology</li>
        `;
        fieldScope = `Psychology careers focus on understanding human behavior and providing support. With your interests and learning style, you could pursue roles in clinical psychology, counseling, or educational psychology.`;

    } else if (interestCategory === 'Agriculture & Environment') {
        careerOptions = `
            <li>B.Sc in Environmental Science, Agriculture, or Horticulture</li>
            <li>Diploma in Sustainable Agriculture or Renewable Energy</li>
            <li>Certificate in Wildlife Conservation or Eco-Tourism</li>
        `;
        fieldScope = `Fields in Agriculture and Environment focus on sustainability and natural resources. With your hands-on learning style and interest in the environment, consider roles in conservation, farming, or ecological research.`;
    }

    // Render the personalized suggestions
    suggestions.innerHTML = `
        <h2>Career Options for ${name}</h2>
        <p><strong>Recommended Fields:</strong></p>
        <ul>${careerOptions}</ul>
        <p><strong>Scope in ${interestCategory}:</strong> ${fieldScope}</p>
    `;
}

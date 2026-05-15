(function () {
  var courses = [
    {
      id: 'protmerge',
      name: 'ProtMerge',
      documents: []
    },
    {
      id: 'nmr-analysis-suite',
      name: 'NMR Analysis Suite',
      documents: [
        {
          title: 'NMR Analysis Suite',
          field: 'NMR · Software',
          desc: 'Desktop application for processing and analyzing Bruker NMR data with T1 fitting and CSP analysis.',
          findings: [
            'Automated T1 inversion-recovery fitting and chemical shift perturbation analysis.',
            'Interactive waterfall plots and publication-quality figure export.',
            'Currently utilized by researchers at ECU.'
          ],
          pdf: 'public/documents/coursework/nmr-analysis-suite/NMR Analysis Suite.pdf#navpanes=0&zoom=75'
        }
      ]
    },
    {
      id: 'polymerization-project',
      name: 'Polymerization Project',
      documents: [
        {
          title: 'ECA Polymerization Kinetics by Spectroscopy',
          field: 'Kinetics · Fluorescence',
          desc: 'Sample project description coming soon...',
          findings: [
            'Derived pseudo-first-order kinetics from spectroscopic data.',
            'Observed the Trommsdorff-Norrish gel effect at high conversion.',
            'Connected non-ideal kinetics to elevated polydispersity index.'
          ],
          pdf: 'public/documents/coursework/polymerization-project/Polymerization Project - Matthew Hale.pdf#navpanes=0&zoom=67'
        }
      ]
    },
    {
      id: 'physical-chemistry-1',
      name: 'Physical Chemistry I',
      documents: [
        {
          title: "Boyle's Law and Enzyme Kinetics",
          field: 'Kinetics · Gas Laws',
          desc: 'Investigated the relationship between pressure and volume in gases and applied kinetic analysis to enzyme-catalyzed reactions.',
          findings: [
            'Confirmed Boyle\'s Law relationship between pressure and volume.',
            'Determined kinetic parameters for enzyme-catalyzed reactions.',
            'Connected gas law behavior to thermodynamic principles.'
          ],
          pdf: "public/documents/coursework/physical-chemistry-1/Boyle's Law and Enzyme Kinetics.pdf"
        },
        {
          title: 'Enthalpy of Combustion of Naphthalene via Bomb Calorimetry',
          field: 'Calorimetry · Thermodynamics',
          desc: 'Used bomb calorimetry to determine the enthalpy of combustion for naphthalene and compared with literature values.',
          findings: [
            'Measured enthalpy of combustion via constant-volume calorimetry.',
            'Applied corrections for fuse wire combustion and acid formation.',
            'Compared experimental ΔHc with calculated literature values.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-1/Using a Bomb Calorimeter to Determine the Enthalpy of Combustion for Naphthalene.pdf'
        },
        {
          title: 'Determining Cv and Heat Capacity Ratio of Gases',
          field: 'Thermodynamics · Gas Properties',
          desc: 'Measured the constant-volume heat capacity and heat capacity ratio for various gases using experimental methods.',
          findings: [
            'Determined Cv values for monatomic and diatomic gases.',
            'Calculated γ = Cp/Cv from experimental measurements.',
            'Compared results with theoretical predictions from equipartition theorem.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-1/Determining the Cv and Heat Capacity Ratio of Gasses.pdf'
        },
        {
          title: 'Enthalpy of Vaporization of Water',
          field: 'Thermodynamics · Phase Changes',
          desc: 'Measured the enthalpy of vaporization of water using the Clausius-Clapeyron relationship.',
          findings: [
            'Measured vapor pressure as a function of temperature.',
            'Applied Clausius-Clapeyron equation to determine ΔHvap.',
            'Compared experimental ΔHvap with accepted literature value.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-1/Enthalpy of Vaporization of Water.pdf'
        },
        {
          title: 'Height of a Water Column via Gauge Pressure',
          field: 'Fluid Mechanics · Gas Laws',
          desc: 'Used gauge pressure measurements to calculate the height of a water column, applying hydrostatic pressure principles.',
          findings: [
            'Related gauge pressure to hydrostatic column height.',
            'Applied P = ρgh to determine water column height.',
            'Demonstrated practical application of manometric pressure measurement.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-1/Using Gauge Pressure to Calculate the Height of a Water Column.pdf'
        }
      ]
    },
    {
      id: 'physical-chemistry-2',
      name: 'Physical Chemistry II',
      documents: [
        {
          title: 'UV-VIS Spectroscopy and Molecular Modeling of DPB',
          field: 'Spectroscopy · Computational',
          desc: 'Combined UV-Vis spectroscopy with molecular modeling to analyze trans,trans-1,4-diphenyl-1,3-butadiene.',
          findings: [
            'Acquired UV-Vis absorption spectrum and identified key transitions.',
            'Performed molecular modeling to predict electronic structure.',
            'Correlated experimental spectra with computational predictions.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-2/UV-VIS Spectroscopy and Molecular Modeling of trans,trans-1,4-Diphenyl-1,3-Butadiene.pdf'
        },
        {
          title: 'Computational vs. Experimental Spectra of Indigo Dye',
          field: 'DFT · UV-Vis',
          desc: 'Applied DFT and TD-DFT to simulate the UV-Vis absorption spectrum of indigo. Compared with experimental data.',
          findings: [
            'Computational λmax ≈ 590–600 nm vs. experimental λmax ≈ 700 nm.',
            '~100 nm blue-shift attributed to solvent/aggregation effects.',
            'Demonstrated utility and limitations of DFT for conjugated chromophores.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-2/Computational vs. Experimental Determined Spectra of Indigo Dye.pdf'
        },
        {
          title: 'NMR Determination of Keto-Enol Equilibrium',
          field: 'NMR · Thermodynamics',
          desc: 'Used ¹H NMR spectroscopy to quantify keto-enol tautomerism in β-dicarbonyl compounds. Calculated Keq and ΔG°.',
          findings: [
            'Assigned signals for both tautomers including enol –OH at ~15.4 ppm.',
            'Calculated Keq from integration ratios and ΔG° from −RT ln(Keq).',
            'Enol stabilization via intramolecular hydrogen bonding drives equilibrium.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-2/Utilizing NMR Methods to Determine the KETO-ENOL Equilibrium.pdf'
        },
        {
          title: "Double-Slit Experiment: Wavelength Determination",
          field: 'Quantum Mechanics · Optics',
          desc: 'Determined wavelengths of red and green lasers using double-slit interference patterns across multiple configurations.',
          findings: [
            'Red laser: mean λ ≈ 668 nm; green laser: mean ≈ 531 nm (rated ~532 nm).',
            'Excellent agreement for green laser; greater variance for red from parallax.',
            'Demonstrated wave-particle duality through interference patterns.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-2/Double-Slit Experiment_ Wavelength Determination of Laser Light.pdf'
        },
        {
          title: 'Electronic & Vibrational Spectra of trans-1,3-Butadiene',
          field: 'DFT · Molecular Orbitals',
          desc: 'Modeled trans-1,3-butadiene with Gaussian 09. Performed geometry optimization, frequency analysis, and TD-DFT.',
          findings: [
            'Optimized structure confirmed planar with π-conjugation across all carbons.',
            'Calculated λmax = 203 nm; literature = 217 nm (14 nm discrepancy).',
            'Compared delocalized HOMO/LUMO with bond-localized NLMOs.'
          ],
          pdf: 'public/documents/coursework/physical-chemistry-2/Electronic and Vibrational Spectra of trans-1,3-Butadiene.pdf'
        }
      ]
    },
    {
      id: 'biochemistry',
      name: 'Biochemistry',
      documents: [
        {
          title: 'Assay of Alcohol Dehydrogenase Activity',
          field: 'Enzymology · Kinetics',
          desc: 'Measured alcohol dehydrogenase activity using spectrophotometric assays to determine kinetic parameters.',
          findings: [
            'Determined enzyme activity via NADH absorbance at 340 nm.',
            'Calculated specific activity and turnover number.',
            'Analyzed Michaelis-Menten kinetics for alcohol dehydrogenase.'
          ],
          pdf: 'public/documents/coursework/biochemistry/Assay of Alcohol Dehydrogenase Activity.pdf'
        },
        {
          title: 'Blood Glucose and Cholesterol Enzymatic Assays',
          field: 'Clinical Biochemistry · Assays',
          desc: 'Performed enzymatic assays to quantify blood glucose and cholesterol levels using colorimetric detection.',
          findings: [
            'Quantified glucose via glucose oxidase-peroxidase coupled assay.',
            'Determined total cholesterol using cholesterol esterase/oxidase method.',
            'Compared results with clinical reference ranges.'
          ],
          pdf: 'public/documents/coursework/biochemistry/Blood Glucose and Cholesterol Enzymatic Assays.pdf'
        },
        {
          title: 'Characterization and Identification of Unknown Sugar',
          field: 'Carbohydrate Chemistry · Analysis',
          desc: 'Used chemical and enzymatic methods to characterize and identify an unknown sugar sample.',
          findings: [
            'Performed reducing sugar tests and enzymatic specificity assays.',
            'Identified unknown sugar through systematic characterization.',
            'Applied structural knowledge of monosaccharide chemistry.'
          ],
          pdf: 'public/documents/coursework/biochemistry/Characterization and Identification of Unknown Sugar.pdf'
        },
        {
          title: 'Extinction Coefficient of Methylene Blue',
          field: 'Spectroscopy · Beer-Lambert',
          desc: 'Determined the molar extinction coefficient of methylene blue using UV-Vis spectrophotometry.',
          findings: [
            'Measured absorbance across serial dilutions to verify Beer-Lambert linearity.',
            'Calculated molar extinction coefficient from calibration curve.',
            'Compared determined ε with literature values for methylene blue.'
          ],
          pdf: 'public/documents/coursework/biochemistry/Extinction Coefficient of Methylene Blue.pdf'
        }
      ]
    },
    {
      id: 'quantitative-analysis',
      name: 'Quantitative and Instrumental Analysis',
      documents: [
        {
          title: 'Thymol Content in Mouthwash by GC',
          field: 'Gas Chromatography',
          desc: 'Quantified thymol content in commercial mouthwash using gas chromatography with internal standard calibration.',
          findings: [
            'Developed GC method for thymol quantification.',
            'Used internal standard calibration for accurate determination.',
            'Compared measured thymol content with manufacturer specifications.'
          ],
          pdf: 'public/documents/coursework/quantitative-analysis/Determining Thymol Content in Mouthwash Utilizing Gas Chromatography.pdf'
        },
        {
          title: 'Determination of Quinine in Soda by Fluorescence',
          field: 'Fluorescence Spectroscopy',
          desc: 'Quantified quinine in tonic water using fluorescence spectrophotometry with standard addition method.',
          findings: [
            'Exploited quinine\'s native fluorescence for sensitive detection.',
            'Applied standard addition method to correct for matrix effects.',
            'Determined quinine concentration in commercial soda samples.'
          ],
          pdf: 'public/documents/coursework/quantitative-analysis/Determination of Quinine in a Soda Sample via Fluorescence Spectrophotometry.pdf'
        },
        {
          title: "Beer's Law Determination of Mn in Steel",
          field: 'Spectrophotometry · Metals Analysis',
          desc: "Determined manganese content in steel samples using UV-Vis spectrophotometry and Beer's Law.",
          findings: [
            'Converted Mn to permanganate ion for visible absorption measurement.',
            'Constructed calibration curve from standard Mn solutions.',
            'Quantified Mn content in unknown steel samples with good precision.'
          ],
          pdf: 'public/documents/coursework/quantitative-analysis/Beer\u2019s Law Determination of Mn in Steel via Spectrophotometry.pdf'
        }
      ]
    }
  ];

  var currentCourse = null;

  var pillsEl = document.getElementById('coursePills');
  var docsSection = document.getElementById('docsSection');
  var activeTitle = document.getElementById('activeCourseTitle');
  var docGrid = document.getElementById('docGrid');
  var emptyState = document.getElementById('emptyState');

  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modalContent');
  var modalClose = document.getElementById('modalClose');

  function renderPills() {
    courses.forEach(function (course, idx) {
      var pill = document.createElement('button');
      pill.className = 'pill';
      pill.textContent = course.name;
      pill.addEventListener('click', function () { selectCourse(idx); });
      pillsEl.appendChild(pill);
    });
  }

  function selectCourse(idx) {
    var course = courses[idx];
    if (!course) return;

    currentCourse = course;

    var pills = pillsEl.querySelectorAll('.pill');
    pills.forEach(function (p, i) {
      p.classList.toggle('active', i === idx);
    });

    activeTitle.textContent = course.name;
    docGrid.innerHTML = '';
    docGrid.className = 'doc-grid';

    course.documents.forEach(function (doc, di) {
      docGrid.appendChild(createDocCard(doc, di));
    });

    docsSection.style.display = 'block';
    emptyState.style.display = 'none';
  }

  function createDocCard(doc, idx) {
    var card = document.createElement('div');
    card.className = 'doc-card';
    var isFeatured = (doc.pdf && doc.pdf.indexOf('nmr-analysis-suite') !== -1) || (doc.pdf && doc.pdf.indexOf('polymerization-project') !== -1);
    if (isFeatured) card.classList.add('doc-card-featured');
    card.addEventListener('click', function () { openModal(doc); });

    var thumb = document.createElement('div');
    thumb.className = 'doc-thumb';
    if (isFeatured) thumb.style.aspectRatio = '16 / 9';

    if (doc.pdf) {
      var pdfBase = doc.pdf.split('#')[0];
      var frame = document.createElement('iframe');
      frame.className = 'doc-pdf-frame';
      frame.loading = 'lazy';
      frame.src = pdfBase;
      thumb.appendChild(frame);
      var mobileLink = document.createElement('a');
      mobileLink.className = 'doc-pdf-mobile-open';
      mobileLink.href = pdfBase;
      mobileLink.target = '_blank';
      mobileLink.rel = 'noopener';
      mobileLink.innerHTML =
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
        '<span>Tap to open PDF</span>';
      mobileLink.addEventListener('click', function (e) { e.stopPropagation(); });
      thumb.appendChild(mobileLink);
    } else {
      var placeholder = document.createElement('div');
      placeholder.className = 'doc-pdf-placeholder';
      placeholder.textContent = 'PDF not yet available';
      thumb.appendChild(placeholder);
    }

    card.appendChild(thumb);

    var label = document.createElement('div');
    label.className = 'doc-label';
    if (isFeatured) label.classList.add('doc-label-featured');
    label.innerHTML =
      '<div class="doc-field">' + doc.field + '</div>' +
      '<div class="doc-card-title">' + doc.title + '</div>' +
      '<div class="doc-card-desc">' + doc.desc + '</div>';
    card.appendChild(label);

    return card;
  }

  function openModal(doc) {
    modalContent.innerHTML =
      '<div class="modal-field">' + doc.field + '</div>' +
      '<div class="modal-title">' + doc.title + '</div>' +
      '<div class="modal-meta">ECU</div>' +
      '<div class="modal-rule"></div>' +
      '<div class="modal-desc">' + doc.desc + '</div>' +
      '<div class="modal-findings">' +
        doc.findings.map(function (f) { return '<div class="modal-finding">' + f + '</div>'; }).join('') +
      '</div>' +
      '<div class="modal-actions">' +
        (doc.pdf ? '<a href="' + doc.pdf + '" target="_blank" class="modal-btn modal-btn-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Open PDF</a>' : '') +
        '<button class="modal-btn modal-btn-outline" onclick="closeModal()">Close</button>' +
      '</div>';
    modal.classList.add('open');
  }

  window.closeModal = function () {
    modal.classList.remove('open');
  };

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  emptyState.style.display = 'block';
  renderPills();

  function slugify(s) {
    return String(s).toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function selectFromHash() {
    var hash = (window.location.hash || '').replace(/^#/, '').toLowerCase();
    if (!hash) return;
    var parts = hash.split('/');
    var courseSlug = parts[0];
    var docSlug = parts[1];

    for (var i = 0; i < courses.length; i++) {
      if (courses[i].id.toLowerCase() === courseSlug) {
        selectCourse(i);
        var pills = pillsEl.querySelectorAll('.pill');
        if (pills[i] && pills[i].scrollIntoView) {
          pills[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        if (docSlug) {
          var docs = courses[i].documents || [];
          for (var d = 0; d < docs.length; d++) {
            if (slugify(docs[d].title) === docSlug) {
              setTimeout(function (doc) { return function () { openModal(doc); }; }(docs[d]), 200);
              break;
            }
          }
        }
        return;
      }
    }
  }

  selectFromHash();
  window.addEventListener('hashchange', selectFromHash);
})();

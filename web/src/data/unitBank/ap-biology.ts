import type { SubjectUnitBank } from './types'

export const BANK_AP_BIOLOGY: SubjectUnitBank = {
  "label": "AP Biology",
  "slug": "ap-biology",
  "units": [
    {
      "unitNumber": 1,
      "title": "Chemistry of Life",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "Approximately 96% of the mass of a living organism is made up of just four elements. Which set lists these four?",
          "options": [
            "Carbon, hydrogen, oxygen, nitrogen",
            "Carbon, sodium, oxygen, iron",
            "Hydrogen, oxygen, phosphorus, sulfur",
            "Carbon, calcium, potassium, nitrogen"
          ],
          "correctAnswer": 0,
          "explanation": "Carbon, hydrogen, oxygen, and nitrogen (CHON) account for roughly 96% of living matter. Phosphorus, sulfur, calcium, and trace elements make up the remainder.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "Which monomer is the building block of proteins?",
          "options": [
            "Nucleotide",
            "Amino acid",
            "Monosaccharide",
            "Glycerol"
          ],
          "correctAnswer": 1,
          "explanation": "Proteins are polymers of amino acids joined by peptide bonds. Nucleotides build nucleic acids, monosaccharides build carbohydrates, and glycerol is a component of many lipids.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "Water is described as a polar molecule. The primary reason for this polarity is that",
          "options": [
            "oxygen shares its electrons equally with both hydrogen atoms.",
            "the molecule contains ionic bonds between hydrogen and oxygen.",
            "oxygen is more electronegative than hydrogen and pulls the shared electrons closer.",
            "hydrogen atoms carry a full negative charge."
          ],
          "correctAnswer": 2,
          "explanation": "Oxygen is more electronegative than hydrogen, so the shared electrons spend more time near oxygen. This gives oxygen a partial negative charge and the hydrogens a partial positive charge, making water polar.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "What type of bond forms between adjacent water molecules and is responsible for many of water's unique properties?",
          "options": [
            "Ionic bond",
            "Hydrogen bond",
            "Nonpolar covalent bond",
            "Peptide bond"
          ],
          "correctAnswer": 1,
          "explanation": "Hydrogen bonds form between the partially positive hydrogen of one water molecule and the partially negative oxygen of another. These weak, numerous bonds underlie cohesion, high specific heat, and other properties.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "A nucleotide, the monomer of nucleic acids, is composed of which three parts?",
          "options": [
            "A fatty acid, a glycerol, and a phosphate group",
            "Three fatty acid chains bonded to glycerol",
            "An amino group, a carboxyl group, and an R group",
            "A phosphate group, a five-carbon sugar, and a nitrogenous base"
          ],
          "correctAnswer": 3,
          "explanation": "Each nucleotide consists of a phosphate group, a pentose (five-carbon) sugar, and a nitrogenous base. Amino/carboxyl/R groups describe amino acids; glycerol and fatty acids describe fats.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "Which functional group is acidic because it tends to release a hydrogen ion (H⁺) in solution?",
          "options": [
            "Amino group (—NH₂)",
            "Hydroxyl group (—OH)",
            "Carboxyl group (—COOH)",
            "Methyl group (—CH₃)"
          ],
          "correctAnswer": 2,
          "explanation": "The carboxyl group readily donates a proton, becoming —COO⁻, which makes it acidic. The amino group tends to accept a proton (basic), and the methyl group is nonpolar and unreactive.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "Plants store glucose for later energy use primarily in the form of which polysaccharide?",
          "options": [
            "Glycogen",
            "Starch",
            "Cellulose",
            "Chitin"
          ],
          "correctAnswer": 1,
          "explanation": "Plants store energy as starch. Glycogen is the animal storage polysaccharide, while cellulose (plants) and chitin (fungi/arthropods) serve structural roles.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "The reaction that links two monomers together by removing a molecule of water is called",
          "options": [
            "hydrolysis.",
            "dehydration synthesis.",
            "denaturation.",
            "oxidation."
          ],
          "correctAnswer": 1,
          "explanation": "Dehydration synthesis (condensation) forms a covalent bond between monomers and releases one water molecule. Hydrolysis is the reverse: adding water to break a polymer apart.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "Which macromolecule serves as the primary long-term energy storage molecule in animals and provides the most energy per gram?",
          "options": [
            "Carbohydrate",
            "Protein",
            "Lipid (fat)",
            "Nucleic acid"
          ],
          "correctAnswer": 2,
          "explanation": "Fats store more than twice the energy per gram of carbohydrates or proteins because their carbon–hydrogen bonds are highly reduced, making them ideal for long-term energy storage.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Insects such as water striders can walk across the surface of a pond without sinking. This is most directly explained by which property of water?",
          "options": [
            "Surface tension resulting from cohesion between water molecules",
            "The high specific heat of water",
            "Water's role as a universal solvent",
            "The lower density of ice compared to liquid water"
          ],
          "correctAnswer": 0,
          "explanation": "Cohesion from hydrogen bonding pulls surface water molecules together, creating surface tension—a 'film' strong enough to support small, lightweight organisms.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "A biologist measures two lake samples: sample X has a pH of 3 and sample Y has a pH of 6. How does the hydrogen ion concentration of sample X compare to that of sample Y?",
          "options": [
            "3 times greater",
            "30 times greater",
            "300 times greater",
            "1000 times greater"
          ],
          "correctAnswer": 3,
          "explanation": "The pH scale is logarithmic, so each unit represents a 10-fold change in [H⁺]. A difference of 3 pH units equals 10³ = 1000 times more hydrogen ions in sample X.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "Ice floats on liquid water, an unusual property among substances. Which explanation best accounts for this observation?",
          "options": [
            "Freezing breaks the hydrogen bonds, allowing molecules to pack tightly.",
            "In ice, each water molecule forms stable hydrogen bonds that hold molecules in a lattice farther apart than in liquid water.",
            "Ice contains fewer water molecules per unit volume because some evaporate during freezing.",
            "The covalent bonds within each water molecule lengthen as temperature drops."
          ],
          "correctAnswer": 1,
          "explanation": "In ice, each water molecule hydrogen-bonds to four others in a rigid crystalline lattice that spaces them farther apart than in the liquid. Lower density means ice floats, insulating water below.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "Butter (an animal fat) is solid at room temperature, while olive oil (a plant fat) is liquid. The best explanation for this difference is that butter contains fatty acids that are",
          "options": [
            "unsaturated, with kinks that prevent tight packing.",
            "saturated, with straight chains that pack tightly together.",
            "shorter, so they have weaker intermolecular attractions.",
            "polar, so they dissolve readily in water."
          ],
          "correctAnswer": 1,
          "explanation": "Saturated fatty acids have no C=C double bonds, so their straight chains pack tightly and solidify at room temperature. Unsaturated fats have double-bond kinks that prevent tight packing, keeping them liquid.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "Heating a protein solution causes the enzyme it contains to lose its function, even though no peptide bonds are broken. This loss of function is best described as",
          "options": [
            "hydrolysis of the primary structure.",
            "denaturation, the disruption of the protein's three-dimensional shape.",
            "dehydration synthesis of new bonds.",
            "a permanent change in the amino acid sequence."
          ],
          "correctAnswer": 1,
          "explanation": "Heat disrupts the weak interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) that maintain a protein's 3-D shape. The peptide-bonded primary sequence is unchanged, but the loss of shape eliminates function.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "In a double-stranded DNA molecule, a region rich in guanine–cytosine (G–C) base pairs is more resistant to being separated by heat than a region rich in adenine–thymine (A–T) pairs. The best explanation is that",
          "options": [
            "G–C pairs are held together by three hydrogen bonds, while A–T pairs have only two.",
            "G–C pairs are joined by covalent bonds and A–T pairs by hydrogen bonds.",
            "guanine and cytosine are larger and therefore heavier molecules.",
            "A–T pairs are located only at the ends of the molecule."
          ],
          "correctAnswer": 0,
          "explanation": "G pairs with C through three hydrogen bonds, whereas A pairs with T through only two. More hydrogen bonds require more energy to break, so G–C-rich regions are more thermally stable.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "A phospholipid has a phosphate-containing head and two fatty acid tails. When phospholipids are placed in water, they spontaneously arrange into a bilayer. This behavior occurs because the molecule is",
          "options": [
            "entirely hydrophobic, so it is repelled by water on all sides.",
            "entirely hydrophilic, so it dissolves completely in water.",
            "amphipathic, with a hydrophilic head that faces water and hydrophobic tails that avoid it.",
            "nonpolar, so it forms ionic bonds with water molecules."
          ],
          "correctAnswer": 2,
          "explanation": "Phospholipids are amphipathic: the polar/charged head interacts with water while the nonpolar tails cluster away from it. In water this drives formation of a bilayer with tails facing inward—the basis of membranes.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "Which observation provides the best evidence that a newly isolated molecule is a nucleic acid rather than a protein?",
          "options": [
            "It is built from monomers containing an amino group, a carboxyl group, and an R group.",
            "It is built from monomers containing a phosphate group, a five-carbon sugar, and a nitrogenous base.",
            "Its monomers are joined by peptide bonds.",
            "It folds into alpha helices and beta pleated sheets."
          ],
          "correctAnswer": 1,
          "explanation": "Nucleotides—phosphate, pentose sugar, and nitrogenous base—are unique to nucleic acids. Amino/carboxyl/R groups, peptide bonds, and alpha-helix/beta-sheet folding all describe proteins.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "Tall trees can transport water from their roots to leaves many meters above the ground. Cohesion and adhesion both contribute to this process. Adhesion specifically refers to",
          "options": [
            "the attraction of water molecules to one another.",
            "the attraction of water molecules to the walls of the xylem vessels.",
            "the evaporation of water from the leaf surface.",
            "the pressure exerted by dissolved minerals in the water."
          ],
          "correctAnswer": 1,
          "explanation": "Adhesion is the attraction between water and other polar surfaces, such as the hydrophilic walls of xylem. Cohesion (water-to-water attraction) holds the column together as transpiration pulls it upward.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "A polypeptide's secondary structure (alpha helices and beta pleated sheets) is stabilized primarily by",
          "options": [
            "peptide bonds between adjacent R groups.",
            "hydrogen bonds between atoms of the polypeptide backbone.",
            "disulfide bridges between cysteine side chains.",
            "the sequence of amino acids alone, with no bonding involved."
          ],
          "correctAnswer": 1,
          "explanation": "Secondary structure arises from hydrogen bonding between the carbonyl oxygen and amide hydrogen of the backbone (not the R groups). Disulfide bridges and R-group interactions stabilize tertiary structure.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "Sweating cools the human body effectively because water has a high heat of vaporization. This property is a direct consequence of",
          "options": [
            "the large number of hydrogen bonds that must be broken for water to evaporate.",
            "the low molecular mass of individual water molecules.",
            "the nonpolar nature of the water molecule.",
            "water's ability to ionize into H⁺ and OH⁻."
          ],
          "correctAnswer": 0,
          "explanation": "Converting liquid water to vapor requires breaking many hydrogen bonds, which absorbs a large amount of heat. As sweat evaporates it carries that heat away, cooling the body.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "An enzyme's activity is measured across a range of temperatures. Activity rises from 10 °C to a peak at 40 °C, then falls sharply to nearly zero by 60 °C. Which statement best explains the sharp decline above 40 °C?",
          "options": [
            "Increasing temperature slowed molecular motion, reducing collisions between enzyme and substrate.",
            "High temperature disrupted the weak bonds maintaining the enzyme's shape, denaturing the active site.",
            "The substrate was used up faster than it could be replaced at high temperatures.",
            "High temperature broke the peptide bonds, hydrolyzing the enzyme into amino acids."
          ],
          "correctAnswer": 1,
          "explanation": "Up to the optimum, higher temperature increases kinetic energy and reaction rate. Beyond it, heat disrupts the hydrogen and ionic bonds and hydrophobic interactions that hold the tertiary structure, denaturing the active site so substrate no longer binds. Peptide bonds are not broken.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "A single point mutation replaces a nonpolar valine with a charged glutamate in the interior of a globular protein that normally folds in the aqueous cytoplasm. Which outcome is most likely, and why?",
          "options": [
            "No change, because a single amino acid cannot affect a large protein.",
            "The protein will fold identically because only the primary structure changed.",
            "Folding may be disrupted, because a charged residue in the hydrophobic core is energetically unfavorable in water.",
            "The protein will form additional alpha helices to compensate."
          ],
          "correctAnswer": 2,
          "explanation": "In aqueous conditions, nonpolar residues cluster in the protein's core away from water. Introducing a charged glutamate into that hydrophobic interior is energetically unfavorable and can destabilize folding, altering tertiary structure and potentially function—illustrating how primary sequence determines higher-order structure.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "Coastal regions experience smaller day-to-night temperature swings than inland deserts at the same latitude. Which property of water best explains this moderating effect, and what is its molecular basis?",
          "options": [
            "Water's high specific heat, because hydrogen bonds absorb and release large amounts of heat with little temperature change.",
            "Water's role as a solvent, because dissolved salts trap heat energy.",
            "Water's low density as ice, because floating ice reflects sunlight.",
            "Water's surface tension, because it prevents heat from escaping the surface."
          ],
          "correctAnswer": 0,
          "explanation": "Water's high specific heat comes from the energy needed to disrupt hydrogen bonds. Large bodies of water absorb heat during the day and release it at night with only small temperature changes, moderating the climate of nearby land.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "The two strands of a DNA double helix are described as antiparallel, running 5'→3' in one strand and 3'→5' in the other. A researcher finds that a certain enzyme can add nucleotides only to a 3' end. What does the antiparallel arrangement most directly imply for this enzyme acting on the two strands?",
          "options": [
            "Both strands can be extended in exactly the same physical direction simultaneously.",
            "The enzyme must work in opposite physical directions along the two strands.",
            "The enzyme cannot interact with double-stranded DNA at all.",
            "The strands must first be converted to a parallel orientation."
          ],
          "correctAnswer": 1,
          "explanation": "Because the strands are antiparallel, their 3' ends point in opposite directions. An enzyme that adds only to a 3' end must therefore travel in opposite physical directions along the two template strands—an idea central to how DNA is replicated.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "Fish living in near-freezing water tend to have cell membranes with a higher proportion of unsaturated fatty acids than fish living in warm water. This pattern best supports the conclusion that unsaturated fatty acids",
          "options": [
            "increase membrane rigidity, which is advantageous in the cold.",
            "help maintain membrane fluidity at low temperatures because their kinks prevent tight packing.",
            "raise the freezing point of the cytoplasm.",
            "allow the membrane to store more energy in the cold."
          ],
          "correctAnswer": 1,
          "explanation": "Cold temperatures make membranes pack together and lose fluidity. The double-bond kinks of unsaturated fatty acids prevent tight packing, keeping the membrane appropriately fluid at low temperatures—an adaptation matching structure to environmental function.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A buffer solution containing a weak acid (HA) and its conjugate base (A⁻) resists changes in pH. When a small amount of strong acid (H⁺) is added, the pH barely changes. Which process best explains this?",
          "options": [
            "The added H⁺ reacts with A⁻ to form HA, removing free hydrogen ions from solution.",
            "The added H⁺ is converted directly into water molecules by the buffer.",
            "The buffer breaks down into carbon dioxide, neutralizing the acid.",
            "The added H⁺ causes HA to release additional hydrogen ions."
          ],
          "correctAnswer": 0,
          "explanation": "A buffer's conjugate base (A⁻) absorbs added H⁺ by combining with it to form HA, while the weak acid can donate H⁺ if base is added. By soaking up or releasing hydrogen ions, the buffer keeps [H⁺]—and thus pH—relatively constant.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "A polymer is assembled from 250 identical monomers into a single unbranched chain. How many water molecules are released during its synthesis, and by what type of reaction?",
          "options": [
            "250 water molecules, by hydrolysis",
            "249 water molecules, by dehydration synthesis",
            "500 water molecules, by dehydration synthesis",
            "249 water molecules, by hydrolysis"
          ],
          "correctAnswer": 1,
          "explanation": "Each bond linking two monomers releases one water molecule (dehydration synthesis). Joining 250 monomers in a chain requires 249 bonds, so 249 water molecules are released. Hydrolysis would consume water, not release it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "Two small molecules are tested for their ability to cross a phospholipid bilayer by simple diffusion. Molecule P is nonpolar and lipid-soluble; molecule Q is polar and water-soluble. Based on membrane structure, which prediction is best supported?",
          "options": [
            "Both molecules cross equally, since the membrane is permeable to all small molecules.",
            "Molecule P crosses more readily because it can dissolve through the hydrophobic interior of the bilayer.",
            "Molecule Q crosses more readily because the membrane surface is hydrophilic.",
            "Neither molecule can cross without a transport protein."
          ],
          "correctAnswer": 1,
          "explanation": "The bilayer's interior is hydrophobic (fatty acid tails). Nonpolar, lipid-soluble molecules dissolve through it easily, while polar, water-soluble molecules are excluded and typically require transport proteins—directly reflecting the amphipathic structure of the membrane.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A researcher denatures an enzyme by adding a chemical that breaks hydrogen bonds and disulfide bridges but leaves peptide bonds intact. The chemical is then removed, and under the right conditions the enzyme spontaneously regains its function. This result best supports which conclusion?",
          "options": [
            "The enzyme's function depends on its quaternary structure only.",
            "A protein's three-dimensional shape—and thus its function—is ultimately determined by its amino acid sequence.",
            "Peptide bonds are the weakest bonds in a protein.",
            "Enzymes do not require a specific shape to function."
          ],
          "correctAnswer": 1,
          "explanation": "Because the primary structure (amino acid sequence, held by peptide bonds) was preserved, the protein could refold correctly once the denaturing agent was removed. This classic result shows that primary structure dictates the higher-order folding that gives a protein its function.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "Glucose (C₆H₁₂O₆) and its structural isomer galactose share the same molecular formula but differ in the arrangement of atoms around one carbon. Cells can readily metabolize glucose but require a specific enzyme to first convert galactose. This observation best illustrates that",
          "options": [
            "molecules with the same formula always behave identically in cells.",
            "the specific three-dimensional arrangement of atoms, not just chemical composition, determines a molecule's biological role.",
            "galactose contains more energy than glucose because it is larger.",
            "enzymes can act on any molecule with the correct molecular formula."
          ],
          "correctAnswer": 1,
          "explanation": "Glucose and galactose are isomers with identical formulas but different atomic arrangements. Because enzymes recognize precise shapes, the cell handles them differently. This demonstrates that structure—not just composition—determines biological function, a recurring theme in biochemistry.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Cells",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "Which structure is present in a typical plant cell but absent in a typical animal cell?",
          "options": [
            "Mitochondrion",
            "Cell wall",
            "Nucleus",
            "Ribosome"
          ],
          "correctAnswer": 1,
          "explanation": "Plant cells have a rigid cellulose cell wall outside the plasma membrane. Mitochondria, nuclei, and ribosomes are found in both plant and animal cells.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The main function of the ribosome is to",
          "options": [
            "synthesize proteins",
            "produce ATP",
            "package and ship proteins",
            "store genetic information"
          ],
          "correctAnswer": 0,
          "explanation": "Ribosomes translate mRNA to assemble polypeptides (proteins). ATP is made in mitochondria, packaging occurs in the Golgi, and DNA stores genetic information.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "Which organelle is the primary site of ATP production in eukaryotic cells?",
          "options": [
            "Nucleus",
            "Golgi apparatus",
            "Mitochondrion",
            "Lysosome"
          ],
          "correctAnswer": 2,
          "explanation": "The mitochondrion carries out cellular respiration, producing most of the cell's ATP. The Golgi packages proteins and lysosomes handle digestion.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "A key difference between prokaryotic and eukaryotic cells is that prokaryotic cells",
          "options": [
            "lack a plasma membrane",
            "lack a membrane-bound nucleus",
            "cannot make proteins",
            "have no DNA"
          ],
          "correctAnswer": 1,
          "explanation": "Prokaryotes lack a membrane-bound nucleus and other membrane-bound organelles; their DNA sits in the cytoplasm. They still have a plasma membrane, DNA, and ribosomes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "Which molecules make up the basic structural framework of the plasma membrane?",
          "options": [
            "Nucleic acids",
            "Phospholipids arranged in a bilayer",
            "Cellulose fibers",
            "Glycogen granules"
          ],
          "correctAnswer": 1,
          "explanation": "The plasma membrane is a phospholipid bilayer with embedded proteins. Its amphipathic phospholipids form the fundamental barrier described by the fluid mosaic model.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "The movement of water across a selectively permeable membrane from a region of higher water concentration to lower water concentration is called",
          "options": [
            "active transport",
            "osmosis",
            "exocytosis",
            "phagocytosis"
          ],
          "correctAnswer": 1,
          "explanation": "Osmosis is the diffusion of water across a selectively permeable membrane down its concentration gradient. It requires no energy input.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "Which organelle is responsible for modifying, sorting, and packaging proteins for secretion?",
          "options": [
            "Golgi apparatus",
            "Rough endoplasmic reticulum",
            "Nucleolus",
            "Peroxisome"
          ],
          "correctAnswer": 0,
          "explanation": "The Golgi apparatus receives proteins from the ER, then modifies, sorts, and packages them into vesicles for transport or secretion.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Smaller cells generally exchange materials with their environment more efficiently than larger cells because smaller cells have a",
          "options": [
            "lower surface area-to-volume ratio",
            "higher surface area-to-volume ratio",
            "thicker cell membrane",
            "larger nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "As a cell grows, volume increases faster than surface area. A higher surface area-to-volume ratio in small cells provides more membrane per unit of cytoplasm for efficient exchange.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "Diffusion of a substance directly across the phospholipid bilayer without energy or a transport protein is called",
          "options": [
            "active transport",
            "facilitated diffusion",
            "simple diffusion",
            "endocytosis"
          ],
          "correctAnswer": 2,
          "explanation": "Simple diffusion is passive movement down a concentration gradient directly through the bilayer, typical of small nonpolar molecules like O₂ and CO₂.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "Which organelle contains digestive enzymes used to break down worn-out organelles and macromolecules?",
          "options": [
            "Ribosome",
            "Lysosome",
            "Centriole",
            "Chloroplast"
          ],
          "correctAnswer": 1,
          "explanation": "Lysosomes contain hydrolytic enzymes that digest macromolecules, damaged organelles, and engulfed particles.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "A cell is placed in a solution and begins to shrink (crenate). The solution surrounding the cell must be",
          "options": [
            "hypotonic to the cell",
            "hypertonic to the cell",
            "isotonic to the cell",
            "the same as the cytoplasm"
          ],
          "correctAnswer": 1,
          "explanation": "A cell shrinks when water leaves it, which happens when the surrounding solution is hypertonic (higher solute, lower water concentration) relative to the cytoplasm.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "A protein destined for secretion from the cell would most likely follow which pathway?",
          "options": [
            "Free ribosome → cytoplasm → nucleus",
            "Rough ER → Golgi apparatus → secretory vesicle → plasma membrane",
            "Mitochondrion → lysosome → cell wall",
            "Smooth ER → nucleolus → ribosome"
          ],
          "correctAnswer": 1,
          "explanation": "Secreted proteins are synthesized on the rough ER, modified in the Golgi, packaged into vesicles, and released by exocytosis at the plasma membrane—the endomembrane pathway.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "Facilitated diffusion differs from active transport in that facilitated diffusion",
          "options": [
            "moves solutes against their concentration gradient",
            "requires ATP hydrolysis",
            "moves solutes down their concentration gradient using transport proteins",
            "occurs only in prokaryotes"
          ],
          "correctAnswer": 2,
          "explanation": "Facilitated diffusion is passive: transport proteins move solutes down the gradient without ATP. Active transport uses energy to move solutes against the gradient.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "Root cells of plants have a very high density of mitochondria. This observation best supports the conclusion that these cells",
          "options": [
            "perform large amounts of photosynthesis",
            "carry out extensive active transport requiring ATP",
            "store large amounts of starch",
            "are dividing very rapidly"
          ],
          "correctAnswer": 1,
          "explanation": "Root cells actively transport mineral ions against gradients, an energy-demanding process. Abundant mitochondria supply the ATP needed, illustrating the link between organelle abundance and cell function.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Which statement best describes the fluid mosaic model of the plasma membrane?",
          "options": [
            "A rigid layer of proteins sandwiched between lipids",
            "A dynamic phospholipid bilayer with proteins that can move laterally",
            "A single layer of phospholipids with fixed proteins",
            "A solid sheet of cholesterol and carbohydrates"
          ],
          "correctAnswer": 1,
          "explanation": "The fluid mosaic model describes the membrane as a fluid phospholipid bilayer with diverse proteins embedded in and moving within it, giving a mosaic, dynamic surface.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "The rough ER and smooth ER differ in that the rough ER is specialized for ___, while the smooth ER is specialized for ___.",
          "options": [
            "lipid synthesis; protein synthesis",
            "protein synthesis; lipid synthesis and detoxification",
            "DNA replication; ATP production",
            "photosynthesis; digestion"
          ],
          "correctAnswer": 1,
          "explanation": "Ribosomes on the rough ER make proteins for membranes and secretion; the smooth ER synthesizes lipids and detoxifies compounds (e.g., in liver cells).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "Membrane surface proteins with attached carbohydrate chains (glycoproteins) most commonly function in",
          "options": [
            "ATP synthesis",
            "cell-to-cell recognition and signaling",
            "DNA storage",
            "breaking down fatty acids"
          ],
          "correctAnswer": 1,
          "explanation": "Carbohydrate 'markers' on glycoproteins and glycolipids allow cells to recognize one another and receive signals—important in immunity and tissue formation.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "A researcher removes the ribosomes from a eukaryotic cell. Which process would be most immediately affected?",
          "options": [
            "Osmosis of water into the cell",
            "Synthesis of new proteins",
            "Movement of the flagellum",
            "Storage of DNA in the nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "Ribosomes are the site of translation. Without them, the cell cannot synthesize new proteins, which would quickly disrupt nearly all cellular functions.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "The endosymbiotic theory proposes that mitochondria and chloroplasts arose from once free-living prokaryotes. Which observation most strongly supports this theory?",
          "options": [
            "They are surrounded by a cell wall",
            "They contain their own circular DNA and ribosomes and divide independently",
            "They are the largest organelles in the cell",
            "They are found only in animal cells"
          ],
          "correctAnswer": 1,
          "explanation": "Mitochondria and chloroplasts have their own circular DNA, prokaryote-like ribosomes, double membranes, and reproduce by binary fission—hallmarks of their bacterial ancestry.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "Small nonpolar molecules such as O₂ and CO₂ cross the membrane easily, but large polar molecules such as glucose cannot cross unaided. This difference is best explained by the",
          "options": [
            "thickness of the cell wall",
            "hydrophobic interior of the phospholipid bilayer",
            "presence of a nucleus",
            "rigidity of the cytoskeleton"
          ],
          "correctAnswer": 1,
          "explanation": "The hydrophobic core of the bilayer readily admits small nonpolar molecules but blocks large polar molecules, which need transport proteins—the basis of selective permeability.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "An animal cell with an internal solute concentration of 0.9% is placed in a 5% salt solution. Predict the net water movement and the effect on the cell.",
          "options": [
            "Water enters; the cell swells and may lyse",
            "Water leaves; the cell shrivels (crenates)",
            "No net water movement; the cell stays the same",
            "Salt enters by osmosis; the cell swells"
          ],
          "correctAnswer": 1,
          "explanation": "The 5% external solution is hypertonic to the 0.9% cytoplasm, so water moves out of the cell by osmosis (toward higher solute). The animal cell, lacking a wall, shrivels/crenates.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "A plant cell and an animal cell are both placed in distilled (pure) water. The plant cell becomes turgid but does not burst, while the animal cell lyses. The best explanation is that the plant cell",
          "options": [
            "is hypertonic to the animal cell",
            "has a rigid cell wall that resists further expansion once turgor pressure builds",
            "actively pumps water back out using ATP",
            "has no permeability to water"
          ],
          "correctAnswer": 1,
          "explanation": "In a hypotonic solution both cells take up water. The plant's rigid cell wall generates turgor pressure that opposes further water entry, preventing bursting; the wall-less animal cell keeps swelling until it lyses.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "A drug blocks the ATP-binding site of the sodium-potassium (Na⁺/K⁺) pump. Which of the following is the most direct consequence?",
          "options": [
            "Facilitated diffusion of glucose stops immediately",
            "The pump can no longer move Na⁺ and K⁺ against their gradients, so the ion gradients dissipate",
            "Osmosis into the cell stops entirely",
            "The cell increases its rate of simple diffusion of ions"
          ],
          "correctAnswer": 1,
          "explanation": "The Na⁺/K⁺ pump uses ATP to move ions against their gradients. Blocking ATP binding halts active transport, so the electrochemical gradients it maintains gradually run down.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "Cells that secrete large amounts of protein (such as pancreatic cells) contain an unusually extensive rough ER and Golgi apparatus. This correlation best supports which claim about cell structure and function?",
          "options": [
            "Organelle abundance is random and unrelated to cell activity",
            "The quantity of an organelle typically reflects the cell's specialized function",
            "Rough ER and Golgi are only present in secretory cells",
            "Protein secretion does not require membrane-bound organelles"
          ],
          "correctAnswer": 1,
          "explanation": "Secretory cells need to synthesize, modify, and package large amounts of protein, so they have abundant rough ER and Golgi. Organelle quantity generally scales with a cell's specialized workload.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Two solutions are separated by a membrane permeable to water but not to solute. Side A is 0.2 M glucose; side B is 0.5 M glucose. After the system reaches equilibrium, what is observed?",
          "options": [
            "Net water movement from A to B, raising the level on side B",
            "Net water movement from B to A, raising the level on side A",
            "Glucose moves from B to A until concentrations are equal",
            "No change, because the membrane blocks all movement"
          ],
          "correctAnswer": 0,
          "explanation": "Water moves toward the hypertonic side (higher solute). Side B (0.5 M) is hypertonic to side A (0.2 M), so water flows A→B, raising side B's level until the pressure difference balances the osmotic drive.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "A researcher labels a newly made protein with a radioactive tag and tracks it through a secretory cell. In which sequence of locations would the label most likely appear over time?",
          "options": [
            "Golgi → rough ER → vesicle → outside cell",
            "Rough ER → Golgi → secretory vesicle → outside cell",
            "Nucleus → mitochondrion → lysosome → outside cell",
            "Smooth ER → ribosome → nucleus → Golgi"
          ],
          "correctAnswer": 1,
          "explanation": "A classic pulse-chase result: secreted proteins made on the rough ER move to the Golgi for modification, are packaged into secretory vesicles, and exit by exocytosis. The label traces this endomembrane route.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "Cholesterol is embedded among the phospholipids of animal cell membranes. At high temperatures it restrains phospholipid movement, and at low temperatures it prevents tight packing. This dual role identifies cholesterol as a",
          "options": [
            "source of membrane energy",
            "fluidity buffer that keeps membrane fluidity within a functional range",
            "carbohydrate marker for cell recognition",
            "channel for polar molecules"
          ],
          "correctAnswer": 1,
          "explanation": "Cholesterol acts as a fluidity buffer: it reduces fluidity at high temperature and increases it at low temperature, keeping the membrane appropriately fluid across a range of conditions.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "White blood cells engulf bacteria by surrounding and internalizing them within a vesicle. This process, a form of endocytosis, is best classified as",
          "options": [
            "exocytosis",
            "phagocytosis",
            "simple diffusion",
            "osmosis"
          ],
          "correctAnswer": 1,
          "explanation": "Phagocytosis ('cell eating') is a type of endocytosis in which the membrane engulfs a large particle, such as a bacterium, into a food vacuole—key to immune defense.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "A single-celled freshwater organism lives in a hypotonic environment and constantly gains water. It uses a contractile vacuole that requires ATP to expel this water. Removing the organism's ATP supply would most directly cause it to",
          "options": [
            "shrink as water leaves the cell",
            "swell and potentially burst as water accumulates",
            "stop taking in water by osmosis",
            "become isotonic to its surroundings"
          ],
          "correctAnswer": 1,
          "explanation": "In hypotonic surroundings water enters continuously by osmosis. The ATP-powered contractile vacuole normally pumps it out; without ATP, water accumulates and the cell swells and may burst.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "Compared with a large spherical cell, a cell of the same volume that is flattened and elongated will have a greater surface area. Which functional advantage does this shape most directly provide?",
          "options": [
            "Reduced need for a plasma membrane",
            "Faster exchange of materials with the environment per unit volume",
            "A lower metabolic rate",
            "Increased DNA storage capacity"
          ],
          "correctAnswer": 1,
          "explanation": "Flattened or elongated shapes raise the surface area-to-volume ratio, providing more membrane per unit of cytoplasm and thus faster material exchange—useful for cells specialized in absorption or gas exchange.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Cellular Energetics",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "During photosynthesis, plants convert light energy into the chemical energy of which molecule?",
          "options": [
            "Water",
            "Oxygen",
            "Glucose",
            "Carbon dioxide"
          ],
          "correctAnswer": 2,
          "explanation": "Photosynthesis uses light energy to build glucose (a sugar) from CO₂ and water, storing energy in the glucose's chemical bonds. Oxygen is released as a byproduct.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "What are the reactants of aerobic cellular respiration?",
          "options": [
            "Glucose and oxygen",
            "Carbon dioxide and water",
            "ATP and NADH",
            "Oxygen and ATP"
          ],
          "correctAnswer": 0,
          "explanation": "Aerobic respiration uses glucose and oxygen as reactants, producing carbon dioxide, water, and ATP.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "In eukaryotes, glycolysis takes place in the",
          "options": [
            "mitochondrial matrix",
            "cytoplasm (cytosol)",
            "chloroplast",
            "nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "Glycolysis, the splitting of glucose into two pyruvate molecules, occurs in the cytosol and does not require oxygen or membranes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "Which molecule is considered the primary energy currency of the cell?",
          "options": [
            "DNA",
            "ATP",
            "Glucose",
            "NADP⁺"
          ],
          "correctAnswer": 1,
          "explanation": "ATP (adenosine triphosphate) stores and transfers energy for cellular work; its terminal phosphate bond releases energy when hydrolyzed to ADP.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "Which gas is released as a byproduct of the light-dependent reactions of photosynthesis?",
          "options": [
            "Carbon dioxide",
            "Nitrogen",
            "Oxygen",
            "Methane"
          ],
          "correctAnswer": 2,
          "explanation": "The light-dependent reactions split water molecules, releasing O₂ as a byproduct while providing electrons and hydrogen ions for the reactions that follow.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "In the absence of oxygen, human muscle cells regenerate NAD⁺ by converting pyruvate into",
          "options": [
            "ethanol",
            "lactic acid (lactate)",
            "glucose",
            "carbon dioxide"
          ],
          "correctAnswer": 1,
          "explanation": "In human muscle, anaerobic fermentation reduces pyruvate to lactic acid, regenerating NAD⁺ so glycolysis can continue producing a small amount of ATP.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "The Calvin cycle (light-independent reactions) of photosynthesis occurs in the",
          "options": [
            "thylakoid membrane",
            "stroma of the chloroplast",
            "mitochondrial matrix",
            "cytosol"
          ],
          "correctAnswer": 1,
          "explanation": "The Calvin cycle takes place in the stroma, the fluid surrounding the thylakoids, where CO₂ is fixed into sugar using ATP and NADPH from the light reactions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "Which structure inside the mitochondrion is the site of the electron transport chain?",
          "options": [
            "Outer membrane",
            "Inner (cristae) membrane",
            "Intermembrane space",
            "Ribosome"
          ],
          "correctAnswer": 1,
          "explanation": "The electron transport chain is embedded in the folded inner mitochondrial membrane (cristae), whose large surface area supports many transport complexes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "Photosynthesis and cellular respiration are related in that the products of one process are the ___ of the other.",
          "options": [
            "reactants",
            "enzymes",
            "membranes",
            "catalysts"
          ],
          "correctAnswer": 0,
          "explanation": "The products of photosynthesis (glucose and O₂) are the reactants of respiration, and respiration's products (CO₂ and water) are photosynthesis's reactants—a cyclical relationship.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "Which pigment is primarily responsible for absorbing light energy in plants?",
          "options": [
            "Hemoglobin",
            "Chlorophyll",
            "Melanin",
            "Keratin"
          ],
          "correctAnswer": 1,
          "explanation": "Chlorophyll, located in the thylakoid membranes, absorbs light (mainly red and blue wavelengths) to drive the light-dependent reactions of photosynthesis.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "During oxidative phosphorylation, oxygen's essential role is to",
          "options": [
            "donate electrons to the first complex of the chain",
            "act as the final electron acceptor at the end of the electron transport chain",
            "directly phosphorylate ADP into ATP",
            "split water to release hydrogen ions"
          ],
          "correctAnswer": 1,
          "explanation": "Oxygen accepts electrons at the end of the electron transport chain, combining with H⁺ to form water. Without it, the chain backs up and ATP production by oxidative phosphorylation halts.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "The energy released as electrons pass down the electron transport chain is used directly to",
          "options": [
            "synthesize glucose",
            "pump hydrogen ions across the membrane, creating a gradient",
            "break down water",
            "reduce NAD⁺ to NADH"
          ],
          "correctAnswer": 1,
          "explanation": "Electron transport pumps H⁺ across the inner mitochondrial membrane, building a concentration gradient. The flow of H⁺ back through ATP synthase then powers ATP production (chemiosmosis).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "A poison prevents ATP synthase from functioning. What is the most direct consequence in a respiring cell?",
          "options": [
            "Glycolysis stops immediately",
            "H⁺ ions accumulate on one side of the membrane and ATP production by chemiosmosis falls",
            "Oxygen consumption increases sharply",
            "The Calvin cycle speeds up"
          ],
          "correctAnswer": 1,
          "explanation": "ATP synthase makes ATP as H⁺ flows through it. Blocking it stops that flow, so protons build up and the proton-motive force can no longer be converted to ATP, sharply reducing ATP output.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "In the Calvin cycle, ATP and NADPH produced by the light reactions are used mainly to",
          "options": [
            "split water molecules",
            "reduce carbon dioxide and build sugar",
            "pump protons into the thylakoid",
            "absorb photons of light"
          ],
          "correctAnswer": 1,
          "explanation": "The Calvin cycle uses ATP for energy and NADPH as a reducing agent to fix and reduce CO₂ into three-carbon sugars—the carbon-fixing stage of photosynthesis.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "Why does aerobic respiration yield far more ATP per glucose molecule than fermentation?",
          "options": [
            "Fermentation does not use glucose",
            "Aerobic respiration fully oxidizes glucose through the Krebs cycle and electron transport chain, whereas fermentation stops after glycolysis",
            "Fermentation produces oxygen",
            "Aerobic respiration occurs in the nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "Aerobic respiration extracts far more energy by oxidizing glucose completely to CO₂, harvesting many electron carriers for oxidative phosphorylation. Fermentation only recovers the small net ATP yield of glycolysis.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "A plant is placed in an atmosphere containing radioactively labeled carbon dioxide (¹⁴CO₂). The labeled carbon would first appear in which product?",
          "options": [
            "Oxygen gas",
            "Organic molecules (sugars) made in the Calvin cycle",
            "Water",
            "ATP"
          ],
          "correctAnswer": 1,
          "explanation": "CO₂ is incorporated into organic molecules during carbon fixation in the Calvin cycle, so the labeled carbon shows up first in the sugars produced there, not in O₂ (which comes from water).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "Which statement correctly compares the ATP produced in glycolysis with that produced in oxidative phosphorylation?",
          "options": [
            "Glycolysis produces most of the cell's ATP",
            "Oxidative phosphorylation produces the majority of ATP per glucose",
            "Both produce equal amounts of ATP",
            "Neither produces ATP directly"
          ],
          "correctAnswer": 1,
          "explanation": "Glycolysis yields only a small net amount of ATP, while oxidative phosphorylation (electron transport plus chemiosmosis) generates the large majority of ATP from each glucose molecule.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "During strenuous exercise, muscle cells may switch to lactic acid fermentation. The main benefit of fermentation to the cell is that it",
          "options": [
            "produces large amounts of ATP",
            "regenerates NAD⁺ so glycolysis can continue producing ATP without oxygen",
            "releases oxygen for aerobic respiration",
            "synthesizes new glucose"
          ],
          "correctAnswer": 1,
          "explanation": "Fermentation's key role is regenerating NAD⁺ from NADH, allowing glycolysis to keep producing a small but vital amount of ATP when oxygen is scarce.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "The folded inner membrane (cristae) of the mitochondrion increases ATP output primarily because folding",
          "options": [
            "stores more DNA",
            "increases the surface area available for electron transport chains and ATP synthase",
            "allows more glucose to enter",
            "reduces the need for oxygen"
          ],
          "correctAnswer": 1,
          "explanation": "Cristae greatly increase membrane surface area, providing room for more electron transport complexes and ATP synthase, which raises the capacity for ATP production.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "Which best explains why the light-dependent reactions cannot continue for long without the Calvin cycle operating?",
          "options": [
            "The Calvin cycle produces the oxygen the light reactions need",
            "The Calvin cycle regenerates ADP and NADP⁺, which the light reactions require as inputs",
            "The Calvin cycle absorbs the light",
            "The light reactions occur inside the Calvin cycle"
          ],
          "correctAnswer": 1,
          "explanation": "The light reactions consume ADP and NADP⁺ to make ATP and NADPH. The Calvin cycle uses ATP and NADPH and returns ADP and NADP⁺, so both stages depend on each other's products.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "A drug makes the inner mitochondrial membrane leaky to protons (an 'uncoupler'). Electron transport continues, but ATP synthesis drops sharply. What best explains this result?",
          "options": [
            "Electrons can no longer move through the chain",
            "The proton gradient dissipates before it can drive ATP synthase",
            "Oxygen is no longer available as the final electron acceptor",
            "Glycolysis is inhibited by the drug"
          ],
          "correctAnswer": 1,
          "explanation": "ATP synthesis depends on the proton gradient built by electron transport. If protons leak back across the membrane freely, the gradient collapses and ATP synthase loses the proton-motive force, even though electrons still flow (releasing energy as heat).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "In an experiment, chloroplasts are illuminated and then placed in the dark. CO₂ fixation continues briefly in the dark before stopping. Which explanation best accounts for this observation?",
          "options": [
            "The Calvin cycle can run indefinitely without light",
            "Stored ATP and NADPH from the light reactions temporarily power the Calvin cycle until they are used up",
            "CO₂ fixation does not require ATP or NADPH",
            "The chloroplasts began performing respiration"
          ],
          "correctAnswer": 1,
          "explanation": "The Calvin cycle needs ATP and NADPH from the light reactions. A short-lived pool of these molecules lets carbon fixation continue briefly in the dark, but it halts once they are depleted.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "A cell is supplied with glucose but deprived of oxygen. Compared with the same cell in oxygen-rich conditions, this cell will most likely consume glucose at a ___ rate to meet its ATP needs.",
          "options": [
            "slower",
            "faster",
            "identical",
            "zero"
          ],
          "correctAnswer": 1,
          "explanation": "Without oxygen the cell relies on fermentation, which yields far less ATP per glucose than aerobic respiration. To meet the same ATP demand, it must break down glucose much faster (the Pasteur effect).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "When ¹⁸O-labeled water (H₂¹⁸O) is supplied to a photosynthesizing plant, the labeled oxygen appears in the O₂ gas released. When ¹⁸O-labeled CO₂ is supplied instead, the O₂ is not labeled. What does this classic result demonstrate?",
          "options": [
            "The oxygen released in photosynthesis comes from CO₂",
            "The oxygen released in photosynthesis comes from the splitting of water",
            "Water and CO₂ contribute oxygen equally to O₂",
            "Oxygen is not actually produced in photosynthesis"
          ],
          "correctAnswer": 1,
          "explanation": "The labeled oxygen from water (not CO₂) ends up in O₂, proving that the O₂ released during photosynthesis originates from the splitting of water molecules in the light reactions.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "A mutation disables an enzyme in the Krebs (citric acid) cycle. Even with glucose and oxygen available, ATP production by oxidative phosphorylation falls dramatically. The best explanation is that the Krebs cycle",
          "options": [
            "is the only stage that makes ATP",
            "supplies the electron carriers (NADH and FADH₂) that feed the electron transport chain",
            "directly pumps protons across the membrane",
            "produces the oxygen used by the chain"
          ],
          "correctAnswer": 1,
          "explanation": "The Krebs cycle generates most of the NADH and FADH₂ that donate electrons to the transport chain. Disabling it starves the chain of electrons, sharply reducing oxidative phosphorylation even when glucose and O₂ are present.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "Two plant species are compared: species A thrives in bright sun, species B in deep shade. Species B is found to have larger amounts of chlorophyll per chloroplast. Which hypothesis best explains this difference?",
          "options": [
            "Species B needs less light overall",
            "More chlorophyll allows species B to capture scarce light more efficiently in low-light conditions",
            "Species A cannot perform photosynthesis",
            "Chlorophyll amount is unrelated to light availability"
          ],
          "correctAnswer": 1,
          "explanation": "In low light, capturing as many photons as possible is advantageous. Greater chlorophyll content per chloroplast increases light absorption, an adaptation matching structure to the shaded environment.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "During chemiosmosis in mitochondria, protons flow back into the matrix through ATP synthase. If the concentration of H⁺ in the intermembrane space were experimentally increased, what would be the most likely short-term effect?",
          "options": [
            "ATP synthesis would decrease",
            "ATP synthesis would increase because the proton gradient (and driving force) is greater",
            "Electron transport would stop",
            "Oxygen would be released"
          ],
          "correctAnswer": 1,
          "explanation": "A steeper H⁺ gradient increases the proton-motive force driving ATP synthase, so ATP synthesis would rise in the short term as more protons flow through the enzyme.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "A researcher measures gas exchange in a plant. In bright light the plant releases O₂ and takes up CO₂ overall; in darkness it takes up O₂ and releases CO₂. The dark-condition result is best explained by the fact that",
          "options": [
            "photosynthesis continues in the dark",
            "cellular respiration occurs continuously, and in the dark it is not masked by photosynthesis",
            "the plant stops all metabolism in the dark",
            "CO₂ is converted directly to O₂ at night"
          ],
          "correctAnswer": 1,
          "explanation": "Plants respire all the time. In light, photosynthesis exceeds respiration, giving net O₂ release; in the dark, only respiration operates, so the plant nets O₂ uptake and CO₂ release.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "Brown fat cells contain a protein (thermogenin) that allows protons to bypass ATP synthase in the mitochondria, generating heat instead of ATP. This adaptation is most beneficial for",
          "options": [
            "storing genetic information",
            "generating body heat in cold conditions",
            "increasing ATP yield per glucose",
            "performing photosynthesis"
          ],
          "correctAnswer": 1,
          "explanation": "By uncoupling electron transport from ATP synthesis, the energy of the proton gradient is released as heat rather than captured as ATP—useful for non-shivering thermogenesis in cold environments.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "A single glucose molecule is fully oxidized in aerobic respiration. Which statement correctly traces the fate of its carbon and energy?",
          "options": [
            "The carbon is released as O₂ and the energy is stored in water",
            "The carbon is released as CO₂ and much of the energy is transferred to ATP, with some lost as heat",
            "All of the energy is captured as ATP with none lost",
            "The carbon becomes part of new glucose molecules"
          ],
          "correctAnswer": 1,
          "explanation": "Glucose's carbon atoms are released as CO₂ across respiration. Much of the released energy is captured in ATP, but energy transfers are never 100% efficient, so some is dissipated as heat.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Cell Communication and Cell Cycle",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "The correct order of the phases of the cell cycle is",
          "options": [
            "G1 → S → G2 → M",
            "S → G1 → M → G2",
            "M → G2 → S → G1",
            "G1 → M → S → G2"
          ],
          "correctAnswer": 0,
          "explanation": "Interphase proceeds G1 (growth) → S (DNA synthesis) → G2 (growth/preparation), followed by M phase (mitosis and cytokinesis).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "During which phase of the cell cycle is DNA replicated?",
          "options": [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
          ],
          "correctAnswer": 1,
          "explanation": "DNA is copied during the S (synthesis) phase, ensuring each daughter cell will receive a complete set of chromosomes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "In signal transduction, the molecule that binds to a receptor to trigger a cellular response is called the",
          "options": [
            "ligand",
            "enzyme",
            "substrate",
            "nucleotide"
          ],
          "correctAnswer": 0,
          "explanation": "A ligand (signaling molecule) binds specifically to a receptor, initiating the reception step of cell signaling.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "Mitosis produces how many daughter cells, and how does their genetic content compare to the parent cell?",
          "options": [
            "Four cells, each genetically different",
            "Two cells, each genetically identical to the parent",
            "Two cells, each with half the DNA",
            "Four cells, each identical to the parent"
          ],
          "correctAnswer": 1,
          "explanation": "Mitosis yields two genetically identical diploid daughter cells, each with the same chromosome number and DNA as the parent. Producing four different cells describes meiosis.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A hydrophilic signaling molecule that cannot cross the plasma membrane must bind to a receptor located",
          "options": [
            "inside the nucleus",
            "on the cell surface (membrane receptor)",
            "in the mitochondrion",
            "within the DNA"
          ],
          "correctAnswer": 1,
          "explanation": "Because hydrophilic (water-soluble) signals cannot pass through the hydrophobic membrane, they bind to receptors on the cell surface, which relay the signal inward.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "During which phase of mitosis do sister chromatids separate and move toward opposite poles?",
          "options": [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
          ],
          "correctAnswer": 2,
          "explanation": "In anaphase, sister chromatids are pulled apart by spindle fibers and move to opposite poles of the cell.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Checkpoints in the cell cycle function to",
          "options": [
            "speed up DNA replication",
            "monitor conditions and ensure the cell is ready to proceed to the next phase",
            "destroy the nucleus",
            "supply ATP to the cell"
          ],
          "correctAnswer": 1,
          "explanation": "Checkpoints act as control points that verify conditions (e.g., DNA integrity, adequate size) before the cell advances, preventing errors from propagating.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "The three general stages of cell signaling, in order, are",
          "options": [
            "reception, transduction, response",
            "response, reception, transduction",
            "transduction, response, reception",
            "reception, response, transduction"
          ],
          "correctAnswer": 0,
          "explanation": "Cell signaling proceeds through reception (ligand binds receptor), transduction (signal relayed and amplified inside the cell), and response (the cellular action).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "Cytokinesis is the process that",
          "options": [
            "replicates the DNA",
            "divides the cytoplasm to form two separate cells",
            "condenses the chromosomes",
            "builds the spindle apparatus"
          ],
          "correctAnswer": 1,
          "explanation": "Cytokinesis divides the cytoplasm following mitosis, physically separating the cell into two daughter cells.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "A steroid hormone is hydrophobic and can pass through the plasma membrane. Its receptor is therefore most likely located",
          "options": [
            "on the outer cell surface",
            "inside the cell (in the cytoplasm or nucleus)",
            "embedded in the cell wall",
            "attached to a carbohydrate marker"
          ],
          "correctAnswer": 1,
          "explanation": "Hydrophobic signals like steroid hormones diffuse through the membrane and bind intracellular receptors, often influencing gene expression directly in the nucleus.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A signaling pathway often involves a 'phosphorylation cascade.' The main advantage of a multi-step cascade is that it",
          "options": [
            "slows the signal down to prevent any response",
            "amplifies the signal, so one activated receptor affects many molecules",
            "prevents the signal from reaching the nucleus",
            "requires no energy"
          ],
          "correctAnswer": 1,
          "explanation": "Each activated enzyme in a cascade activates many of the next, greatly amplifying the original signal so that a few ligand molecules can produce a large cellular response.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "If a cell's DNA is damaged during G1, a properly functioning cell cycle will most likely",
          "options": [
            "proceed immediately into S phase",
            "halt at the G1 checkpoint until the damage is repaired",
            "skip directly to mitosis",
            "begin cytokinesis"
          ],
          "correctAnswer": 1,
          "explanation": "The G1 checkpoint detects DNA damage and can arrest the cycle, allowing time for repair before DNA is replicated—preventing the copying of damaged DNA.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "Cyclins and cyclin-dependent kinases (CDKs) regulate the cell cycle. CDKs become active when",
          "options": [
            "they bind to the appropriate cyclin, whose levels rise and fall during the cycle",
            "DNA replication stops",
            "the cell shrinks in size",
            "cytokinesis is complete"
          ],
          "correctAnswer": 0,
          "explanation": "CDKs are active only when bound to cyclins. Because cyclin concentrations rise and fall predictably, CDK activity—and thus progression through the cycle—is tightly timed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "A drug prevents spindle microtubules from forming. At which stage would a dividing cell most likely become arrested?",
          "options": [
            "G1 phase",
            "S phase",
            "Metaphase/anaphase of mitosis",
            "Cytokinesis before mitosis"
          ],
          "correctAnswer": 2,
          "explanation": "Spindle fibers align and separate chromosomes during metaphase and anaphase. Without a functional spindle, the spindle-assembly checkpoint halts the cell at metaphase, unable to segregate chromosomes.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "Two adjacent cells receive the same signaling molecule but respond differently. The best explanation is that the two cells",
          "options": [
            "have identical proteins and pathways",
            "possess different receptors or different downstream signaling proteins",
            "cannot actually receive the signal",
            "are in different phases of mitosis"
          ],
          "correctAnswer": 1,
          "explanation": "A cell's response to a signal depends on the receptors and internal signaling/response proteins it expresses. Different cells can interpret the same ligand differently based on this molecular makeup.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "Which best explains why DNA must be replicated before, not after, mitosis begins?",
          "options": [
            "Replication provides energy for mitosis",
            "Each daughter cell must receive a complete, identical copy of the genome",
            "Replication condenses the chromosomes",
            "Mitosis destroys half of the DNA"
          ],
          "correctAnswer": 1,
          "explanation": "S-phase replication ensures every chromosome is duplicated so that mitosis can distribute one complete, identical set of chromosomes to each daughter cell.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "Second messengers such as cyclic AMP (cAMP) function in signal transduction to",
          "options": [
            "bind the extracellular ligand",
            "relay and amplify the signal inside the cell after receptor activation",
            "transport the receptor to the nucleus",
            "degrade the signaling molecule"
          ],
          "correctAnswer": 1,
          "explanation": "After a membrane receptor is activated, second messengers like cAMP quickly spread through the cytoplasm, relaying and amplifying the signal to trigger downstream responses.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "Cancer cells often continue to divide even without external growth signals. This behavior is best described as a failure of",
          "options": [
            "DNA replication",
            "normal cell-cycle control (checkpoints and regulation)",
            "cytokinesis",
            "protein synthesis"
          ],
          "correctAnswer": 1,
          "explanation": "Cancer results from breakdowns in cell-cycle regulation—cells ignore checkpoints and stop-signals, dividing uncontrollably even when they should not.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "A cell in G0 phase is best described as one that has",
          "options": [
            "permanently lost its DNA",
            "exited the active cell cycle and is not currently dividing",
            "completed mitosis but not cytokinesis",
            "doubled its number of chromosomes"
          ],
          "correctAnswer": 1,
          "explanation": "G0 is a non-dividing resting state. Some cells (like mature neurons) remain in G0 permanently; others can re-enter the cycle when signaled.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "When epinephrine binds a liver cell's surface receptor, it triggers the breakdown of glycogen inside the cell—yet epinephrine never enters the cell. This is possible because",
          "options": [
            "epinephrine is hydrophobic and diffuses through the membrane",
            "a signal transduction pathway relays the message from the receptor to intracellular enzymes",
            "the receptor carries epinephrine into the nucleus",
            "the liver cell engulfs epinephrine by phagocytosis"
          ],
          "correctAnswer": 1,
          "explanation": "The extracellular signal is converted, via a transduction pathway (including second messengers), into intracellular activity—here activating enzymes that break down glycogen—without the ligand entering the cell.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "In a classic experiment, a cell in M phase is fused with a cell in G1 phase. The G1 nucleus prematurely begins mitosis. This result best supports the conclusion that",
          "options": [
            "G1 cells are always ready to divide",
            "cytoplasmic signaling molecules (such as active cyclin-CDK complexes) drive cells into mitosis",
            "the cell cycle runs without any regulation",
            "M phase and G1 are identical"
          ],
          "correctAnswer": 1,
          "explanation": "The M-phase cytoplasm contains active mitosis-promoting factors (cyclin-CDK) that force the G1 nucleus into mitosis. This shows that diffusible cytoplasmic regulators control cell-cycle transitions.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "A mutation renders a cell's p53 protein (a checkpoint regulator that halts the cycle when DNA is damaged) nonfunctional. What is the most likely long-term consequence?",
          "options": [
            "The cell will stop dividing entirely",
            "Cells with damaged DNA may continue dividing, increasing the risk of cancer",
            "DNA replication will become impossible",
            "The cell will remain permanently in G0"
          ],
          "correctAnswer": 1,
          "explanation": "p53 arrests the cycle to allow DNA repair or triggers apoptosis. Without it, cells bearing DNA damage can keep dividing and accumulate mutations, a common step toward cancer.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "A researcher applies a growth factor to a dish of cells and observes a strong response, then applies a molecule that blocks the relay proteins inside the cell. After the block, the same growth factor produces no response even though it still binds the receptor. This indicates that",
          "options": [
            "reception is sufficient for a cellular response",
            "transduction is required to convert receptor activation into a response",
            "the growth factor was destroyed",
            "the receptor moved into the nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "Binding (reception) alone is not enough; the signal must be relayed through transduction proteins to produce a response. Blocking transduction abolishes the response despite intact receptor binding.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Nerve and muscle cells rarely divide, remaining in G0, while skin and gut lining cells divide frequently. Which generalization is best supported by this comparison?",
          "options": [
            "All cells divide at the same rate",
            "The frequency of cell division is regulated according to a cell type's role in the organism",
            "G0 cells have lost their DNA",
            "Frequently dividing cells lack checkpoints"
          ],
          "correctAnswer": 1,
          "explanation": "Cell-division frequency is tuned to function: tissues needing constant renewal (skin, gut) divide often, while specialized, long-lived cells (neurons, muscle) exit the cycle into G0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "A signaling pathway ends by activating a transcription factor. Blocking this final step would most directly prevent the cell from",
          "options": [
            "binding the original ligand",
            "changing which genes it expresses in response to the signal",
            "forming a plasma membrane",
            "replicating its DNA in S phase"
          ],
          "correctAnswer": 1,
          "explanation": "When a pathway's response is a transcription factor activating genes, blocking that step prevents the signal-induced change in gene expression—the cell can still receive the signal but cannot carry out the genetic response.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "Apoptosis (programmed cell death) is essential during development, such as the removal of webbing between a developing embryo's fingers. A failure of apoptosis during development would most likely result in",
          "options": [
            "fewer cells than normal",
            "retention of structures that should have been eliminated",
            "faster DNA replication",
            "complete loss of the tissue"
          ],
          "correctAnswer": 1,
          "explanation": "Apoptosis sculpts tissues by eliminating unneeded cells. If it fails, structures normally removed—like finger webbing—may persist, illustrating the developmental role of controlled cell death.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "A cell is treated so that cyclin cannot be degraded at the end of mitosis. What is the most likely effect on the cell cycle?",
          "options": [
            "The cell will exit into G0 permanently",
            "Cell-cycle regulation will be disrupted because cyclin levels must fall for the cycle to reset",
            "DNA replication will double in speed",
            "The signal transduction pathway will be blocked"
          ],
          "correctAnswer": 1,
          "explanation": "Orderly progression requires cyclins to rise and then be degraded so CDK activity falls and the cycle resets. Preventing cyclin breakdown disrupts the normal timing and control of the cycle.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "Density-dependent inhibition causes normal cells to stop dividing once they form a single crowded layer, whereas cancer cells continue dividing and pile up. This difference is best explained by cancer cells",
          "options": [
            "having more mitochondria",
            "failing to respond normally to cell-cycle control signals from crowding",
            "being unable to complete mitosis",
            "lacking a plasma membrane"
          ],
          "correctAnswer": 1,
          "explanation": "Normal cells respond to crowding signals and stop dividing (density-dependent inhibition). Cancer cells ignore these regulatory signals, continuing to divide and overgrow—another sign of lost cell-cycle control.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "A membrane receptor requires two ligand molecules to bind before it activates. At very low ligand concentrations, almost no response occurs, but the response rises steeply once a threshold concentration is reached. This behavior best illustrates that signaling pathways can produce",
          "options": [
            "responses unrelated to ligand concentration",
            "switch-like (threshold) responses rather than gradual ones",
            "permanent activation regardless of ligand",
            "responses only in the nucleus"
          ],
          "correctAnswer": 1,
          "explanation": "Requiring multiple ligand-binding events creates a threshold: little response below it and a sharp rise above it. Such cooperativity gives pathways switch-like behavior, useful for decisive cellular responses.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "During the cell cycle, a checkpoint at the G2/M boundary verifies that DNA replication is complete before mitosis proceeds. If this checkpoint failed, the most serious immediate risk to the daughter cells would be",
          "options": [
            "receiving too many mitochondria",
            "entering mitosis with incompletely replicated DNA, producing daughter cells with missing genetic information",
            "having too much cytoplasm",
            "being unable to perform signal transduction"
          ],
          "correctAnswer": 1,
          "explanation": "The G2/M checkpoint ensures DNA is fully copied before division. Bypassing it could send a cell into mitosis with unreplicated DNA, distributing incomplete genomes to the daughter cells.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Heredity",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "An organism with the genotype Bb is best described as",
          "options": [
            "homozygous dominant",
            "homozygous recessive",
            "heterozygous",
            "haploid"
          ],
          "correctAnswer": 2,
          "explanation": "Bb has two different alleles for the gene, making it heterozygous. Homozygous genotypes have two identical alleles (BB or bb).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "In a cross between two heterozygous parents (Aa × Aa), what fraction of offspring is expected to show the recessive phenotype?",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "Aa × Aa yields a 1:2:1 genotype ratio (AA:Aa:aa). Only the aa individuals (1/4) show the recessive phenotype.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "Meiosis produces gametes that are",
          "options": [
            "diploid and identical to the parent cell",
            "haploid, with half the chromosome number of the parent cell",
            "diploid with double the chromosomes",
            "identical to one another"
          ],
          "correctAnswer": 1,
          "explanation": "Meiosis halves the chromosome number, producing haploid gametes so that fertilization restores the diploid number.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "Mendel's law of segregation states that",
          "options": [
            "alleles for different genes assort independently",
            "the two alleles for a trait separate during gamete formation",
            "dominant alleles are always more common",
            "offspring are identical to parents"
          ],
          "correctAnswer": 1,
          "explanation": "The law of segregation states that the two alleles of a gene separate during meiosis, so each gamete carries only one allele for each trait.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "A person with blood type AB expresses both A and B antigens. This is an example of",
          "options": [
            "complete dominance",
            "codominance",
            "recessive inheritance",
            "polygenic inheritance"
          ],
          "correctAnswer": 1,
          "explanation": "In codominance, both alleles are fully expressed in the heterozygote. Type AB blood shows both A and B antigens simultaneously.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "Genetic variation among offspring produced by meiosis arises in part from crossing over, which occurs during",
          "options": [
            "prophase I",
            "anaphase II",
            "interphase",
            "cytokinesis"
          ],
          "correctAnswer": 0,
          "explanation": "Crossing over—the exchange of segments between homologous chromosomes—occurs during prophase I of meiosis, increasing genetic variation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "A sex-linked recessive trait carried on the X chromosome appears more often in males because males",
          "options": [
            "have two X chromosomes",
            "have only one X chromosome, so a single recessive allele is expressed",
            "cannot inherit the trait from their mother",
            "always inherit the trait from their father"
          ],
          "correctAnswer": 1,
          "explanation": "Males (XY) have only one X chromosome, so a single recessive allele on it is expressed. Females (XX) would need two copies to show the trait.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "Independent assortment refers to the random distribution of",
          "options": [
            "sister chromatids during mitosis",
            "homologous chromosome pairs into gametes during meiosis",
            "water across a membrane",
            "proteins in the Golgi"
          ],
          "correctAnswer": 1,
          "explanation": "Mendel's law of independent assortment describes how homologous pairs line up and separate randomly during meiosis I, so alleles of different genes are distributed independently.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "A test cross is used to determine the genotype of an organism showing the dominant phenotype by crossing it with an individual that is",
          "options": [
            "homozygous dominant",
            "homozygous recessive",
            "heterozygous",
            "haploid"
          ],
          "correctAnswer": 1,
          "explanation": "Crossing the unknown with a homozygous recessive individual reveals the unknown's genotype: any recessive offspring indicate the unknown carries a recessive allele.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "In humans, a diploid body cell contains 46 chromosomes. How many chromosomes are in a human gamete?",
          "options": [
            "23",
            "46",
            "92",
            "22"
          ],
          "correctAnswer": 0,
          "explanation": "Gametes are haploid, containing half the diploid number: 46 ÷ 2 = 23 chromosomes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "A dihybrid cross between two organisms heterozygous for two independently assorting genes (RrYy × RrYy) produces offspring in what phenotypic ratio?",
          "options": [
            "3:1",
            "1:1:1:1",
            "9:3:3:1",
            "1:2:1"
          ],
          "correctAnswer": 2,
          "explanation": "A dihybrid cross of two heterozygotes for independently assorting genes gives the classic 9:3:3:1 phenotypic ratio.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "In snapdragons, crossing a red-flowered plant with a white-flowered plant produces all pink offspring. This inheritance pattern is best described as",
          "options": [
            "codominance",
            "incomplete dominance",
            "complete dominance",
            "sex linkage"
          ],
          "correctAnswer": 1,
          "explanation": "In incomplete dominance, the heterozygote shows an intermediate (blended) phenotype—pink—rather than either parent's color or both colors together.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "A color-blind man (X^c Y) has children with a woman who is a carrier (X^C X^c). What is the probability that a son will be color-blind?",
          "options": [
            "0",
            "1/4",
            "1/2",
            "1"
          ],
          "correctAnswer": 2,
          "explanation": "Sons receive Y from the father and either X^C or X^c from the carrier mother. Half of the sons inherit X^c and are color-blind, giving a 1/2 probability.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "Two genes located close together on the same chromosome are often inherited together. These genes are said to be",
          "options": [
            "independently assorting",
            "linked",
            "codominant",
            "homozygous"
          ],
          "correctAnswer": 1,
          "explanation": "Linked genes lie near each other on the same chromosome and tend to be inherited together because crossing over between them is infrequent, deviating from independent assortment.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "Human height and skin color vary continuously across a wide range rather than in distinct categories. This pattern is characteristic of",
          "options": [
            "polygenic inheritance",
            "complete dominance",
            "sex linkage",
            "a single-gene trait"
          ],
          "correctAnswer": 0,
          "explanation": "Polygenic traits are influenced by many genes, each adding a small effect, producing continuous variation such as a range of heights or skin tones.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "Nondisjunction during meiosis can produce a gamete with an extra chromosome. If such a gamete is fertilized, the resulting individual will have",
          "options": [
            "the normal chromosome number",
            "one too few or one too many chromosomes in the affected pair",
            "exactly half the normal chromosomes",
            "no chromosomes"
          ],
          "correctAnswer": 1,
          "explanation": "Nondisjunction—the failure of chromosomes to separate properly—produces gametes with an extra or missing chromosome, leading to conditions like trisomy after fertilization.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "A woman with blood type O has a child with a man with blood type AB. Which blood types are possible in their children?",
          "options": [
            "Only type O",
            "A and B",
            "AB only",
            "A, B, AB, and O"
          ],
          "correctAnswer": 1,
          "explanation": "The mother is ii (type O); the father is I^A I^B. Children receive i from the mother and either I^A or I^B from the father, giving type A (I^A i) or type B (I^B i).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "How does meiosis contribute to genetic variation in a way that mitosis does not?",
          "options": [
            "It produces genetically identical cells",
            "It combines crossing over and independent assortment to shuffle alleles",
            "It copies DNA more accurately",
            "It prevents mutations"
          ],
          "correctAnswer": 1,
          "explanation": "Meiosis generates variation through crossing over and the independent assortment of homologous pairs, producing genetically diverse gametes—unlike mitosis, which makes identical cells.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "A pedigree shows a trait that appears in every generation and affects males and females roughly equally, with affected children often having an affected parent. This pattern is most consistent with",
          "options": [
            "autosomal recessive inheritance",
            "autosomal dominant inheritance",
            "X-linked recessive inheritance",
            "mitochondrial inheritance"
          ],
          "correctAnswer": 1,
          "explanation": "Autosomal dominant traits typically appear in every generation, affect both sexes equally, and pass from an affected parent to offspring—matching the described pedigree.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "In a cross, an allele is found to be lethal when homozygous, so no homozygous offspring survive. A cross between two heterozygotes (Ll × Ll) would therefore produce a surviving phenotypic ratio of",
          "options": [
            "3:1",
            "2:1",
            "1:1",
            "9:3:3:1"
          ],
          "correctAnswer": 1,
          "explanation": "Ll × Ll gives 1 LL : 2 Ll : 1 ll. If ll is lethal and dies, only LL and Ll survive, producing a 1:2 ratio among survivors—commonly expressed as 2:1 for the two surviving classes.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "Two organisms with genotype AaBb are crossed. Genes A and B are located far apart on the same chromosome. Which best predicts the offspring ratio, and why?",
          "options": [
            "Exactly 9:3:3:1, because linked genes always assort independently",
            "Approximately 9:3:3:1, because genes far apart cross over often enough to assort nearly independently",
            "1:1, because linked genes never recombine",
            "3:1, because only one gene is expressed"
          ],
          "correctAnswer": 1,
          "explanation": "Genes far apart on a chromosome experience frequent crossing over, so they recombine almost as if unlinked, producing a ratio close to the 9:3:3:1 expected for independent assortment.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "A geneticist finds that two linked genes recombine in 12% of offspring. What is the approximate map distance between them?",
          "options": [
            "1.2 map units",
            "12 map units",
            "24 map units",
            "88 map units"
          ],
          "correctAnswer": 1,
          "explanation": "Recombination frequency in percent approximately equals map distance in map units (centimorgans). A 12% recombination frequency corresponds to roughly 12 map units.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "A couple who both have normal pigmentation have a child with albinism (an autosomal recessive condition). What can be concluded about the parents' genotypes?",
          "options": [
            "Both parents are homozygous dominant",
            "Both parents are heterozygous carriers",
            "One parent is homozygous recessive",
            "Albinism cannot be inherited this way"
          ],
          "correctAnswer": 1,
          "explanation": "For an unaffected couple to have an affected (aa) child, each parent must carry a recessive allele. Both parents are therefore heterozygous carriers (Aa).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "In cats, an X-linked gene determines orange vs. black fur, and heterozygous females (X^O X^B) are calico with patches of both colors. The patchy pattern is best explained by",
          "options": [
            "incomplete dominance blending the colors",
            "random X-chromosome inactivation in different cells during development",
            "a mutation occurring in each patch",
            "the presence of a Y chromosome"
          ],
          "correctAnswer": 1,
          "explanation": "In female mammals, one X is randomly inactivated in each cell early in development. In a heterozygous female, different patches express different X alleles, producing the calico pattern.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "A trait is passed only from affected mothers to all of their children, but never from affected fathers. This unusual inheritance pattern is best explained by",
          "options": [
            "autosomal dominant inheritance",
            "X-linked dominant inheritance",
            "mitochondrial (cytoplasmic) inheritance",
            "codominance"
          ],
          "correctAnswer": 2,
          "explanation": "Mitochondria are inherited through the egg (maternal cytoplasm). A mitochondrial trait therefore passes from affected mothers to all offspring but is never transmitted by fathers.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "In a certain plant, gene C must be present (dominant) for any pigment to form, and a second gene P determines whether the pigment is purple or red. A cc plant is white regardless of its P genotype. This interaction, where one gene masks the expression of another, is called",
          "options": [
            "incomplete dominance",
            "epistasis",
            "codominance",
            "independent assortment"
          ],
          "correctAnswer": 1,
          "explanation": "Epistasis occurs when one gene's product masks or modifies the phenotypic expression of another gene. Here, cc blocks pigment entirely, overriding the P gene.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "A dihybrid cross expected to yield a 9:3:3:1 ratio instead yields a 9:7 ratio (9 with a trait, 7 without). This modified ratio is best explained by",
          "options": [
            "sex linkage",
            "two genes acting together (epistasis), where the dominant allele of both genes is required for the trait",
            "incomplete dominance",
            "nondisjunction"
          ],
          "correctAnswer": 1,
          "explanation": "A 9:7 ratio arises when both genes must have at least one dominant allele to produce the phenotype. Any genotype lacking a dominant allele of either gene falls into the '7' group—a form of epistasis.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "A pedigree shows a rare trait that affects males far more often than females; affected males pass it to none of their sons but to all of their daughters, who are carriers. This is characteristic of",
          "options": [
            "autosomal dominant inheritance",
            "X-linked recessive inheritance",
            "Y-linked inheritance",
            "mitochondrial inheritance"
          ],
          "correctAnswer": 1,
          "explanation": "X-linked recessive traits appear more in males; an affected father gives his X (with the allele) to all daughters (making them carriers) and his Y to sons (so no sons are affected by him).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "If nondisjunction occurs during meiosis I versus meiosis II, the difference in the resulting gametes is that meiosis I nondisjunction affects",
          "options": [
            "only one of the four gametes",
            "all four gametes, because homologous pairs fail to separate before the chromatids do",
            "no gametes",
            "only the egg, never the sperm"
          ],
          "correctAnswer": 1,
          "explanation": "Meiosis I nondisjunction sends both homologs to one pole, so all four resulting gametes are abnormal (two with an extra chromosome, two missing one). Meiosis II nondisjunction affects only two of the four gametes.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "A geneticist crosses true-breeding purple, long-pollen plants with true-breeding red, round-pollen plants and finds the F2 generation deviates strongly from a 9:3:3:1 ratio, with parental combinations far more common than expected. The best explanation is that the two genes are",
          "options": [
            "located on different chromosomes",
            "genetically linked on the same chromosome",
            "incompletely dominant",
            "subject to nondisjunction"
          ],
          "correctAnswer": 1,
          "explanation": "An excess of parental-type combinations indicates the genes are linked on the same chromosome, so they tend to be inherited together and recombine less often than independent assortment predicts.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 6,
      "title": "Gene Expression and Regulation",
      "questions": [
        {
          "id": "q-u6-easy-1",
          "question": "The process of copying a gene's DNA sequence into messenger RNA is called",
          "options": [
            "translation",
            "transcription",
            "replication",
            "mutation"
          ],
          "correctAnswer": 1,
          "explanation": "Transcription synthesizes an mRNA copy of a gene's DNA. Translation then uses that mRNA to build a protein.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-2",
          "question": "During translation, proteins are assembled at the",
          "options": [
            "nucleus",
            "ribosome",
            "mitochondrion",
            "Golgi apparatus"
          ],
          "correctAnswer": 1,
          "explanation": "Ribosomes read mRNA codons and join amino acids to build a polypeptide during translation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "A sequence of three nucleotides in mRNA that codes for one amino acid is called a",
          "options": [
            "gene",
            "codon",
            "anticodon",
            "nucleosome"
          ],
          "correctAnswer": 1,
          "explanation": "A codon is a triplet of mRNA nucleotides specifying a particular amino acid (or a start/stop signal).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-4",
          "question": "Which molecule carries amino acids to the ribosome during translation?",
          "options": [
            "mRNA",
            "tRNA",
            "rRNA",
            "DNA polymerase"
          ],
          "correctAnswer": 1,
          "explanation": "Transfer RNA (tRNA) carries specific amino acids to the ribosome, matching its anticodon to the mRNA codon.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-5",
          "question": "In RNA, which base replaces the thymine found in DNA?",
          "options": [
            "Adenine",
            "Cytosine",
            "Uracil",
            "Guanine"
          ],
          "correctAnswer": 2,
          "explanation": "RNA uses uracil (U) in place of thymine (T); uracil pairs with adenine during transcription.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-6",
          "question": "A mutation that changes a single nucleotide base in a gene is called a",
          "options": [
            "frameshift mutation",
            "point mutation",
            "chromosomal deletion",
            "nondisjunction"
          ],
          "correctAnswer": 1,
          "explanation": "A point mutation is a change in a single nucleotide, such as a substitution. Frameshifts result from insertions or deletions that shift the reading frame.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-7",
          "question": "In prokaryotes, a cluster of genes controlled by a single promoter and regulated together is called a(n)",
          "options": [
            "operon",
            "codon",
            "ribosome",
            "plasmid"
          ],
          "correctAnswer": 0,
          "explanation": "An operon is a group of genes transcribed together under one promoter, allowing coordinated regulation—common in bacteria (e.g., the lac operon).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-8",
          "question": "The central dogma of molecular biology describes the flow of genetic information as",
          "options": [
            "protein → RNA → DNA",
            "DNA → RNA → protein",
            "RNA → DNA → protein",
            "DNA → protein → RNA"
          ],
          "correctAnswer": 1,
          "explanation": "The central dogma states that information flows from DNA to RNA (transcription) to protein (translation).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "Before a eukaryotic mRNA leaves the nucleus, non-coding regions called ___ are removed.",
          "options": [
            "exons",
            "introns",
            "codons",
            "promoters"
          ],
          "correctAnswer": 1,
          "explanation": "Introns are non-coding sequences spliced out during mRNA processing; exons are the coding regions that remain and are joined together.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
          "question": "Regulation of gene expression allows a single organism's cells to",
          "options": [
            "all have different DNA",
            "become specialized by expressing different subsets of genes",
            "stop dividing permanently",
            "eliminate their nuclei"
          ],
          "correctAnswer": 1,
          "explanation": "Nearly all cells in an organism share the same DNA; differential gene expression lets them specialize (e.g., muscle vs. nerve cells) by using different genes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-medium-1",
          "question": "A point mutation changes a codon from GAA to GAG, but both codons specify the amino acid glutamate. This is an example of a",
          "options": [
            "nonsense mutation",
            "silent mutation",
            "frameshift mutation",
            "missense mutation"
          ],
          "correctAnswer": 1,
          "explanation": "Because the genetic code is redundant, a base change that still codes for the same amino acid is a silent mutation, causing no change in the protein.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "An insertion of a single nucleotide near the beginning of a gene often has severe effects because it",
          "options": [
            "changes only one amino acid",
            "shifts the reading frame, altering every codon downstream",
            "cannot be transcribed",
            "prevents DNA replication"
          ],
          "correctAnswer": 1,
          "explanation": "A single insertion or deletion causes a frameshift, changing the grouping of all subsequent codons and typically producing a nonfunctional protein.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "In the lac operon of E. coli, the genes for lactose metabolism are transcribed only when lactose is present. This arrangement benefits the cell by",
          "options": [
            "making the enzymes at all times regardless of need",
            "producing enzymes only when their substrate is available, conserving resources",
            "preventing the cell from ever using lactose",
            "permanently disabling the genes"
          ],
          "correctAnswer": 1,
          "explanation": "Inducible regulation ensures the cell makes lactose-processing enzymes only when lactose is available, avoiding wasteful production when it is absent.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "A nonsense mutation changes an amino acid codon into a stop codon. The most likely effect on the resulting protein is that it will be",
          "options": [
            "longer than normal",
            "truncated (shortened) and likely nonfunctional",
            "identical to the normal protein",
            "folded more tightly"
          ],
          "correctAnswer": 1,
          "explanation": "A premature stop codon halts translation early, producing a shortened protein that usually cannot function properly.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "In eukaryotes, transcription factors regulate gene expression primarily by",
          "options": [
            "binding to DNA regulatory regions to help turn genes on or off",
            "translating mRNA into protein",
            "replicating the DNA",
            "splicing out introns"
          ],
          "correctAnswer": 0,
          "explanation": "Transcription factors bind promoter and enhancer regions of DNA, influencing whether and how strongly RNA polymerase transcribes a gene.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "Alternative splicing of a single pre-mRNA allows a cell to",
          "options": [
            "produce multiple different proteins from one gene",
            "copy DNA more quickly",
            "prevent all mutations",
            "eliminate the need for ribosomes"
          ],
          "correctAnswer": 0,
          "explanation": "By joining exons in different combinations, alternative splicing lets one gene encode several related proteins, increasing protein diversity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "Which best explains why the same mutation might be harmful in one location of a gene but silent in another?",
          "options": [
            "Mutations never affect proteins",
            "The genetic code's redundancy and a codon's position determine whether the amino acid sequence changes",
            "All mutations cause frameshifts",
            "Proteins are unaffected by their amino acid sequence"
          ],
          "correctAnswer": 1,
          "explanation": "Because multiple codons can specify the same amino acid, a base change may or may not alter the protein depending on which codon and position are affected—sometimes silent, sometimes harmful.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "A regulatory protein called a repressor binds to the operator of an operon. The most direct effect is to",
          "options": [
            "increase transcription of the operon's genes",
            "block RNA polymerase and prevent transcription of the operon's genes",
            "translate the mRNA into protein",
            "replicate the operon"
          ],
          "correctAnswer": 1,
          "explanation": "When a repressor binds the operator, it physically blocks RNA polymerase from transcribing the downstream genes, switching the operon off.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "During development, a gene that codes for a transcription factor controlling many other genes is mutated. Compared with a mutation in a gene coding for a single enzyme, this mutation is likely to have",
          "options": [
            "a smaller effect",
            "a much broader effect, because the transcription factor regulates many downstream genes",
            "no effect at all",
            "an effect only on DNA replication"
          ],
          "correctAnswer": 1,
          "explanation": "A master regulatory transcription factor influences the expression of many genes, so its mutation can cascade into widespread developmental effects—far broader than a single-enzyme mutation.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "Which sequence correctly represents the process of gene expression from start to finished product in a eukaryote?",
          "options": [
            "mRNA processing → transcription → translation",
            "transcription → mRNA processing → translation",
            "translation → transcription → mRNA processing",
            "transcription → translation → mRNA processing"
          ],
          "correctAnswer": 1,
          "explanation": "In eukaryotes, DNA is transcribed to pre-mRNA, which is processed (splicing, capping, tailing) in the nucleus, then translated into protein in the cytoplasm.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-hard-1",
          "question": "In sickle-cell anemia, a single base substitution changes one amino acid in hemoglobin (glutamate to valine). Despite affecting only one amino acid, the mutation drastically alters the protein's behavior. This best illustrates that",
          "options": [
            "single amino acid changes never matter",
            "even a single amino acid change can significantly alter a protein's structure and function",
            "only frameshift mutations are harmful",
            "hemoglobin is not made of amino acids"
          ],
          "correctAnswer": 1,
          "explanation": "Replacing a polar glutamate with a nonpolar valine causes hemoglobin molecules to clump under low oxygen, deforming red blood cells. A single substitution can have profound effects.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "In the lac operon, the presence of lactose leads to gene expression, while glucose availability suppresses it even when lactose is present. This dual control ensures the cell",
          "options": [
            "always uses lactose first",
            "preferentially uses glucose and only turns to lactose when glucose is scarce",
            "never metabolizes sugars",
            "ignores its environment"
          ],
          "correctAnswer": 1,
          "explanation": "The lac operon integrates two signals so bacteria use the more efficient glucose first; lactose genes are strongly expressed only when lactose is present and glucose is low—an example of efficient gene regulation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "A mutation occurs in the promoter region of a gene rather than in its coding sequence. What is the most likely consequence?",
          "options": [
            "The amino acid sequence of the protein changes directly",
            "The level or timing of the gene's transcription may change, even though the coding sequence is unaltered",
            "The gene is duplicated",
            "Translation occurs without mRNA"
          ],
          "correctAnswer": 1,
          "explanation": "The promoter controls transcription initiation. A promoter mutation can alter how much or when a gene is transcribed without changing the protein's amino acid sequence itself.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "Two cells in the same organism contain identical DNA, yet one produces insulin and the other does not. The best explanation is that the cells differ in",
          "options": [
            "their DNA sequences",
            "which genes are expressed due to differential regulation",
            "the number of chromosomes they contain",
            "their ability to replicate DNA"
          ],
          "correctAnswer": 1,
          "explanation": "Cell specialization arises from differential gene expression: the same genome is regulated differently, so only certain cells (pancreatic beta cells) transcribe and translate the insulin gene.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "A researcher adds a chemical that adds methyl groups to a gene's promoter region, and the gene's expression decreases without any change to its DNA sequence. This is an example of",
          "options": [
            "a point mutation",
            "epigenetic regulation",
            "a frameshift mutation",
            "alternative splicing"
          ],
          "correctAnswer": 1,
          "explanation": "DNA methylation can silence genes without altering the underlying sequence—an epigenetic modification that regulates expression heritably during cell division.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "A mutation in a gene encoding a splicing factor could potentially affect many proteins in a cell. Which statement best explains why?",
          "options": [
            "Splicing factors replicate DNA",
            "Splicing factors process many different pre-mRNAs, so their malfunction can alter numerous proteins",
            "Splicing factors are only used once",
            "Each protein has its own unique splicing machinery"
          ],
          "correctAnswer": 1,
          "explanation": "Because a single type of splicing factor helps process many pre-mRNAs, its malfunction can disrupt the correct assembly of numerous mRNAs and thus many proteins.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "An mRNA is read in codons beginning 5'-AUG-CCC-UAA-3'. AUG codes for methionine and CCC for proline, while UAA is a stop codon. How many amino acids will the completed peptide contain?",
          "options": [
            "Three",
            "Two",
            "One",
            "Zero"
          ],
          "correctAnswer": 1,
          "explanation": "Translation reads AUG (methionine) and CCC (proline), adding two amino acids, then reaches UAA, a stop codon that terminates synthesis without adding an amino acid. The finished peptide therefore contains two amino acids.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "A virus inserts its DNA into a host gene's coding region. Which outcome is most likely for that host gene?",
          "options": [
            "Its expression is unaffected",
            "Its reading frame or product is disrupted, likely producing a nonfunctional protein",
            "It is transcribed faster",
            "It gains a new promoter that boosts expression"
          ],
          "correctAnswer": 1,
          "explanation": "Inserting foreign DNA into a coding region disrupts the gene's sequence and reading frame, typically preventing production of a functional protein—a form of insertional mutation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "Homeotic (Hox) genes control the body plan of an organism by regulating the expression of many other genes during development. A mutation in a Hox gene can cause a structure to develop in the wrong location. This demonstrates that",
          "options": [
            "Hox genes code for structural proteins directly",
            "master regulatory genes can control large developmental programs",
            "development requires no gene regulation",
            "Hox genes are only found in plants"
          ],
          "correctAnswer": 1,
          "explanation": "Hox genes are master regulators; by controlling many downstream genes, a single Hox mutation can redirect entire developmental pathways, e.g., placing a body part in the wrong position.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "In an experiment, a functional gene is transferred from one bacterial species into another, and the recipient begins producing the corresponding protein correctly. This success depends on the fact that",
          "options": [
            "each species uses a completely different genetic code",
            "the genetic code is nearly universal across organisms",
            "proteins are made without ribosomes",
            "DNA cannot be transferred between species"
          ],
          "correctAnswer": 1,
          "explanation": "Because the genetic code is nearly universal, the same codons specify the same amino acids in most organisms, allowing a transferred gene to be transcribed and translated correctly in a new host—the basis of genetic engineering.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 7,
      "title": "Natural Selection",
      "questions": [
        {
          "id": "q-u7-easy-1",
          "question": "Natural selection acts most directly on an organism's",
          "options": [
            "genotype",
            "phenotype",
            "DNA sequence alone",
            "number of chromosomes"
          ],
          "correctAnswer": 1,
          "explanation": "Natural selection acts on phenotypes—the observable traits that affect survival and reproduction—though this indirectly changes allele (genotype) frequencies over time.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "Which of the following is the ultimate source of new genetic variation in a population?",
          "options": [
            "Natural selection",
            "Mutation",
            "Migration",
            "Genetic drift"
          ],
          "correctAnswer": 1,
          "explanation": "Mutation is the original source of new alleles. Other processes (selection, drift, gene flow) act on variation but do not create entirely new alleles.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "An organism's fitness in evolutionary terms is best measured by its",
          "options": [
            "physical strength",
            "reproductive success (number of surviving offspring)",
            "body size",
            "lifespan alone"
          ],
          "correctAnswer": 1,
          "explanation": "Evolutionary fitness refers to reproductive success—how many surviving, fertile offspring an organism contributes to the next generation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "Structures such as the forelimbs of humans, whales, and bats share a similar bone arrangement despite different functions. These are examples of",
          "options": [
            "analogous structures",
            "homologous structures",
            "vestigial structures",
            "fossils"
          ],
          "correctAnswer": 1,
          "explanation": "Homologous structures share a common evolutionary origin (and underlying anatomy) even when their functions differ, providing evidence of shared ancestry.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "The gradual accumulation of differences that leads to the formation of a new species is called",
          "options": [
            "extinction",
            "speciation",
            "migration",
            "fossilization"
          ],
          "correctAnswer": 1,
          "explanation": "Speciation is the evolutionary process by which populations diverge to become distinct species, often through reproductive isolation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "When a small group breaks off from a larger population and establishes a new population, the resulting loss of genetic variation is called the",
          "options": [
            "bottleneck effect",
            "founder effect",
            "gene flow",
            "natural selection"
          ],
          "correctAnswer": 1,
          "explanation": "The founder effect occurs when a few individuals start a new population, carrying only a subset of the original population's genetic variation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "Two species that influence each other's evolution, such as a flower and its pollinator, are undergoing",
          "options": [
            "convergent evolution",
            "coevolution",
            "genetic drift",
            "artificial selection"
          ],
          "correctAnswer": 1,
          "explanation": "Coevolution occurs when two interacting species act as agents of selection on each other, driving reciprocal adaptations.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "The breeding of dogs by humans to produce specific traits is an example of",
          "options": [
            "natural selection",
            "artificial selection",
            "genetic drift",
            "gene flow"
          ],
          "correctAnswer": 1,
          "explanation": "Artificial selection is selective breeding by humans to favor desired traits, analogous to but directed differently than natural selection.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "A population is in Hardy-Weinberg equilibrium only if, among other conditions, there is",
          "options": [
            "strong natural selection",
            "no mutation, no migration, random mating, a large population, and no selection",
            "frequent genetic drift",
            "nonrandom mating"
          ],
          "correctAnswer": 1,
          "explanation": "Hardy-Weinberg equilibrium requires no mutation, no gene flow, random mating, a very large population (no drift), and no natural selection—conditions under which allele frequencies stay constant.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "Similar environmental pressures causing unrelated species (like sharks and dolphins) to evolve similar streamlined body shapes is an example of",
          "options": [
            "divergent evolution",
            "convergent evolution",
            "coevolution",
            "genetic drift"
          ],
          "correctAnswer": 1,
          "explanation": "Convergent evolution produces similar traits in distantly related species facing similar selective pressures, resulting in analogous (not homologous) structures.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "In a population, individuals with intermediate-sized bodies survive best, while very small and very large individuals are selected against. This is an example of",
          "options": [
            "directional selection",
            "stabilizing selection",
            "disruptive selection",
            "artificial selection"
          ],
          "correctAnswer": 1,
          "explanation": "Stabilizing selection favors intermediate phenotypes and selects against extremes, reducing variation and centering the population around an average value.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "After a pesticide is applied repeatedly, an insect population becomes largely resistant. The best explanation is that",
          "options": [
            "the pesticide caused the insects to mutate on purpose",
            "resistant individuals already existed and survived to reproduce, increasing resistance in the population",
            "all insects developed resistance during their lifetimes",
            "the insects chose to become resistant"
          ],
          "correctAnswer": 1,
          "explanation": "Pre-existing resistant variants survive pesticide exposure and reproduce, so resistance alleles become more common over generations. Selection acts on existing variation—it does not create resistance on demand.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What is the expected frequency of heterozygous individuals?",
          "options": [
            "0.09",
            "0.21",
            "0.42",
            "0.49"
          ],
          "correctAnswer": 2,
          "explanation": "With q = 0.3, p = 0.7. Heterozygote frequency = 2pq = 2(0.7)(0.3) = 0.42.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "Genetic drift has a greater effect on small populations than large ones because",
          "options": [
            "small populations have more mutations",
            "random changes in allele frequency have a proportionally larger impact when few individuals are involved",
            "large populations cannot evolve",
            "selection does not occur in small populations"
          ],
          "correctAnswer": 1,
          "explanation": "In small populations, chance events can dramatically change allele frequencies from one generation to the next, whereas in large populations random fluctuations tend to average out.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "Two populations of the same species become separated by a mountain range and, over time, can no longer interbreed even when reunited. This describes",
          "options": [
            "sympatric speciation",
            "allopatric speciation",
            "convergent evolution",
            "genetic drift"
          ],
          "correctAnswer": 1,
          "explanation": "Allopatric speciation occurs when a geographic barrier separates populations, allowing them to diverge until reproductive isolation prevents interbreeding.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "Which observation provides the strongest evidence that two organisms share a recent common ancestor?",
          "options": [
            "They live in the same habitat",
            "They have highly similar DNA sequences",
            "They are the same size",
            "They eat similar foods"
          ],
          "correctAnswer": 1,
          "explanation": "Molecular similarity—especially in DNA and protein sequences—is powerful evidence of shared ancestry, since closely related organisms diverged more recently and share more sequence.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "Vestigial structures, such as the reduced pelvic bones in whales, are considered evidence for evolution because they",
          "options": [
            "have no evolutionary significance",
            "are remnants of structures that were functional in ancestors",
            "prove organisms were designed identically",
            "arise from convergent evolution"
          ],
          "correctAnswer": 1,
          "explanation": "Vestigial structures are reduced remnants of features that served a function in an ancestor, supporting descent with modification from ancestral forms.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "Sexual selection can lead to elaborate traits (like a peacock's tail) that reduce survival. These traits persist because they",
          "options": [
            "improve camouflage",
            "increase mating success enough to outweigh survival costs",
            "have no effect on reproduction",
            "reduce the number of offspring"
          ],
          "correctAnswer": 1,
          "explanation": "Traits favored by mate choice can spread even if they lower survival, as long as they sufficiently increase reproductive success—a key idea in sexual selection.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "A population experiences a sudden disaster that kills most individuals at random, leaving a small surviving group with reduced genetic diversity. This is an example of the",
          "options": [
            "founder effect",
            "bottleneck effect",
            "gene flow",
            "stabilizing selection"
          ],
          "correctAnswer": 1,
          "explanation": "The bottleneck effect occurs when a population is drastically reduced by a random event, leaving survivors whose gene pool may differ from and be less diverse than the original.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "Gene flow between two neighboring populations tends to",
          "options": [
            "increase the genetic differences between them",
            "make the two populations more genetically similar",
            "cause immediate speciation",
            "eliminate all genetic variation"
          ],
          "correctAnswer": 1,
          "explanation": "Gene flow (migration and interbreeding) transfers alleles between populations, reducing genetic differences and tending to homogenize their gene pools.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "In a Hardy-Weinberg population, 16% of individuals are homozygous recessive for a trait. What is the frequency of the dominant allele?",
          "options": [
            "0.4",
            "0.6",
            "0.16",
            "0.84"
          ],
          "correctAnswer": 1,
          "explanation": "q² = 0.16, so q = 0.4. Then p = 1 − 0.4 = 0.6, the frequency of the dominant allele.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "A biologist observes that a certain allele's frequency increases and decreases unpredictably over many generations in a small island population, with no clear relationship to any trait's usefulness. The best explanation is",
          "options": [
            "directional natural selection",
            "genetic drift",
            "stabilizing selection",
            "gene flow from the mainland"
          ],
          "correctAnswer": 1,
          "explanation": "Random, non-adaptive fluctuations in allele frequency in a small population are the signature of genetic drift, which is driven by chance rather than fitness differences.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "Antibiotic resistance can spread rapidly among bacteria not only through reproduction but also through horizontal gene transfer (e.g., sharing plasmids). Compared to relying on mutation and reproduction alone, horizontal gene transfer allows resistance to spread",
          "options": [
            "more slowly",
            "faster and even between different bacterial species",
            "only within a single cell",
            "without any genetic change"
          ],
          "correctAnswer": 1,
          "explanation": "Horizontal gene transfer moves resistance genes directly between bacteria—even across species—so resistance can spread far faster than by inheritance through reproduction alone.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "On an island, a bird population's beak-size distribution shifts over a decade toward larger beaks after a drought leaves only large, hard seeds available. This change is best described as",
          "options": [
            "stabilizing selection",
            "directional selection",
            "disruptive selection",
            "genetic drift"
          ],
          "correctAnswer": 1,
          "explanation": "When environmental conditions favor one extreme (large beaks for hard seeds), the population mean shifts in that direction—directional selection.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "Two insect populations living in the same area diverge because some mate on one host plant and others on a different host plant, leading to reproductive isolation without any geographic barrier. This is an example of",
          "options": [
            "allopatric speciation",
            "sympatric speciation",
            "convergent evolution",
            "the bottleneck effect"
          ],
          "correctAnswer": 1,
          "explanation": "Sympatric speciation occurs without geographic separation—here, behavioral/ecological isolation (different host plants) reduces gene flow until the populations become distinct species.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "A population of beetles shows two common colors (light and dark) but few intermediates, because both extremes are camouflaged in a patchy habitat while intermediates are easily seen by predators. Over time this pattern is maintained by",
          "options": [
            "stabilizing selection",
            "directional selection",
            "disruptive (diversifying) selection",
            "the founder effect"
          ],
          "correctAnswer": 2,
          "explanation": "Disruptive selection favors both extremes over intermediate phenotypes, which can maintain two forms in a population and may promote divergence.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "A researcher finds that a certain protein has nearly identical amino acid sequences across mammals but differs greatly between mammals and insects. The best explanation is that",
          "options": [
            "the protein is unimportant",
            "the protein sequence has been conserved among more closely related organisms since they diverged more recently",
            "insects lack all proteins",
            "the protein evolves at the same rate in all lineages"
          ],
          "correctAnswer": 1,
          "explanation": "Closely related organisms share more recent common ancestors and thus fewer accumulated differences. High sequence similarity among mammals versus insects reflects their evolutionary relatedness and conservation of important proteins.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "Heterozygotes for the sickle-cell allele are resistant to malaria, while homozygous recessive individuals suffer sickle-cell anemia and homozygous dominant individuals are vulnerable to malaria. In malaria-prone regions, this maintains both alleles in the population through",
          "options": [
            "directional selection",
            "heterozygote advantage (balancing selection)",
            "genetic drift",
            "gene flow"
          ],
          "correctAnswer": 1,
          "explanation": "When heterozygotes have the highest fitness, both alleles are maintained in the population—heterozygote advantage, a form of balancing selection that preserves genetic variation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "A newly formed volcanic island is colonized by a single finch species, which over time diversifies into several species with different beak shapes and diets. This process, in which one ancestral species rapidly gives rise to many, is called",
          "options": [
            "convergent evolution",
            "adaptive radiation",
            "genetic drift",
            "stabilizing selection"
          ],
          "correctAnswer": 1,
          "explanation": "Adaptive radiation is the rapid diversification of one lineage into many species adapted to different niches, often following colonization of new, unoccupied environments.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "A population geneticist measures allele frequencies in a population over several generations and finds they remain essentially constant. Which conclusion is best supported, assuming a large population and random mating?",
          "options": [
            "The population is definitely evolving rapidly",
            "No significant evolutionary forces (selection, drift, migration, mutation) are strongly acting on this gene",
            "The gene has no alleles",
            "Natural selection is strongly favoring one allele"
          ],
          "correctAnswer": 1,
          "explanation": "Constant allele frequencies across generations (Hardy-Weinberg equilibrium) indicate that the major evolutionary forces are not appreciably changing this gene's frequencies.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 8,
      "title": "Ecology",
      "questions": [
        {
          "id": "q-u8-easy-1",
          "question": "Which term describes all the different populations of organisms living and interacting in a particular area?",
          "options": [
            "Population",
            "Community",
            "Ecosystem",
            "Biome"
          ],
          "correctAnswer": 1,
          "explanation": "A community consists of all the interacting populations of different species in an area. An ecosystem also includes the nonliving (abiotic) environment.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-2",
          "question": "Organisms that produce their own food through photosynthesis are called",
          "options": [
            "consumers",
            "producers (autotrophs)",
            "decomposers",
            "carnivores"
          ],
          "correctAnswer": 1,
          "explanation": "Producers (autotrophs) make their own organic molecules, typically via photosynthesis, forming the base of most food chains.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-3",
          "question": "In an energy pyramid, roughly what percentage of energy is typically transferred from one trophic level to the next?",
          "options": [
            "10%",
            "50%",
            "90%",
            "100%"
          ],
          "correctAnswer": 0,
          "explanation": "About 10% of the energy at one trophic level is passed to the next; the rest is lost mainly as heat through metabolism, which is why food chains are short.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-4",
          "question": "The role or 'job' a species plays in its ecosystem, including how it obtains energy and interacts with others, is its",
          "options": [
            "habitat",
            "niche",
            "biome",
            "population"
          ],
          "correctAnswer": 1,
          "explanation": "A niche is a species' functional role and set of interactions in an ecosystem. Its habitat is simply where it lives.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-5",
          "question": "A relationship in which one organism benefits and the other is harmed is called",
          "options": [
            "mutualism",
            "commensalism",
            "parasitism",
            "competition"
          ],
          "correctAnswer": 2,
          "explanation": "In parasitism, one organism (the parasite) benefits at the expense of the host, which is harmed. Mutualism benefits both; commensalism benefits one without affecting the other.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-6",
          "question": "Decomposers such as fungi and bacteria are important in ecosystems because they",
          "options": [
            "produce oxygen",
            "break down dead organisms and recycle nutrients",
            "only consume living prey",
            "prevent all energy loss"
          ],
          "correctAnswer": 1,
          "explanation": "Decomposers break down dead matter and wastes, returning nutrients to the soil and water so they can be reused by producers.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-7",
          "question": "A population's growth pattern that produces a J-shaped curve represents",
          "options": [
            "logistic growth",
            "exponential growth",
            "zero growth",
            "declining growth"
          ],
          "correctAnswer": 1,
          "explanation": "Exponential growth produces a J-shaped curve, occurring when resources are unlimited. Logistic growth (S-shaped) levels off at carrying capacity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-8",
          "question": "The maximum population size that an environment can sustain given its resources is called the",
          "options": [
            "biotic potential",
            "carrying capacity",
            "limiting factor",
            "niche"
          ],
          "correctAnswer": 1,
          "explanation": "Carrying capacity (K) is the largest population an environment can support long-term based on available resources.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-9",
          "question": "Which process returns carbon dioxide to the atmosphere?",
          "options": [
            "Photosynthesis only",
            "Cellular respiration and combustion",
            "Nitrogen fixation",
            "Condensation"
          ],
          "correctAnswer": 1,
          "explanation": "Cellular respiration by organisms and the combustion of fuels release CO₂ into the atmosphere, part of the carbon cycle. Photosynthesis removes CO₂.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-10",
          "question": "A keystone species is one that",
          "options": [
            "is the most numerous species in a community",
            "has a disproportionately large effect on its ecosystem relative to its abundance",
            "only exists in aquatic ecosystems",
            "cannot affect other species"
          ],
          "correctAnswer": 1,
          "explanation": "A keystone species has a large influence on community structure relative to its abundance; its removal can dramatically alter the ecosystem.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-medium-1",
          "question": "A population grows rapidly at first, then levels off as it approaches the environment's carrying capacity. This S-shaped pattern is called",
          "options": [
            "exponential growth",
            "logistic growth",
            "a J-shaped curve",
            "zero population growth"
          ],
          "correctAnswer": 1,
          "explanation": "Logistic growth produces an S-shaped curve: rapid early growth slows as limiting factors take effect near carrying capacity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-2",
          "question": "Removing a top predator from an ecosystem often causes the prey population to increase and then overgraze vegetation. This best illustrates",
          "options": [
            "that predators have no effect on ecosystems",
            "top-down control of community structure by predators",
            "exponential growth of the predator",
            "mutualism"
          ],
          "correctAnswer": 1,
          "explanation": "Predators can exert top-down control, keeping prey populations in check. Their removal can trigger cascading effects, such as prey overpopulation and habitat damage.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-3",
          "question": "Two species of paramecium grown separately both thrive, but when grown together in the same limited environment, one drives the other to extinction. This outcome best illustrates the",
          "options": [
            "mutualism principle",
            "competitive exclusion principle",
            "founder effect",
            "carrying capacity"
          ],
          "correctAnswer": 1,
          "explanation": "The competitive exclusion principle states that two species competing for the same limiting resource cannot coexist indefinitely; one outcompetes the other.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-4",
          "question": "Only about 10% of energy passes to each higher trophic level. This best explains why",
          "options": [
            "food chains rarely have more than four or five levels",
            "producers are rare",
            "decomposers are unnecessary",
            "energy is created at each level"
          ],
          "correctAnswer": 0,
          "explanation": "Because so much energy is lost between levels, there is too little energy to support many trophic levels, limiting most food chains to a few links.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-5",
          "question": "In ecological succession, which best describes primary succession?",
          "options": [
            "Regrowth of a forest after a fire",
            "Colonization of a newly formed lifeless surface such as bare rock, starting with pioneer species",
            "Rapid decline of a population",
            "Migration of animals between seasons"
          ],
          "correctAnswer": 1,
          "explanation": "Primary succession begins on lifeless substrate (e.g., new volcanic rock) with no soil; pioneer species like lichens gradually build soil. Secondary succession follows a disturbance where soil remains.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-6",
          "question": "Nitrogen-fixing bacteria in the root nodules of legumes and the plants they inhabit exchange benefits: the bacteria receive sugars and the plant receives usable nitrogen. This relationship is an example of",
          "options": [
            "parasitism",
            "mutualism",
            "commensalism",
            "competition"
          ],
          "correctAnswer": 1,
          "explanation": "Both partners benefit, making this mutualism: the plant gains fixed nitrogen while the bacteria gain carbohydrates and a habitat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-7",
          "question": "A limiting factor that becomes more intense as a population becomes more crowded (such as disease or food shortage) is described as",
          "options": [
            "density-independent",
            "density-dependent",
            "abiotic only",
            "unrelated to population size"
          ],
          "correctAnswer": 1,
          "explanation": "Density-dependent factors intensify as population density rises (competition, disease, predation), helping regulate populations near carrying capacity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-8",
          "question": "Burning fossil fuels adds large amounts of carbon dioxide to the atmosphere. Within the carbon cycle, this represents a transfer of carbon from a long-term ___ into the atmosphere.",
          "options": [
            "source",
            "reservoir (sink)",
            "consumer",
            "producer"
          ],
          "correctAnswer": 1,
          "explanation": "Fossil fuels are a long-term carbon reservoir (sink). Combustion releases their stored carbon as atmospheric CO₂, disturbing the balance of the carbon cycle.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-9",
          "question": "A species introduced to a new ecosystem where it has no natural predators may grow rapidly and outcompete native species. Such an organism is called a(n)",
          "options": [
            "keystone species",
            "invasive species",
            "pioneer species",
            "indicator species"
          ],
          "correctAnswer": 1,
          "explanation": "An invasive species spreads rapidly in a new environment lacking its natural controls, often harming native species and ecosystems.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-10",
          "question": "Which best explains why energy flows through an ecosystem but nutrients cycle within it?",
          "options": [
            "Both energy and nutrients are recycled endlessly",
            "Energy is continually lost as heat and must be resupplied by the sun, while matter (nutrients) is reused",
            "Nutrients are lost as heat while energy is recycled",
            "Neither energy nor nutrients move through ecosystems"
          ],
          "correctAnswer": 1,
          "explanation": "Energy is degraded to heat at each transfer and cannot be reused, requiring constant solar input. Matter, in contrast, is conserved and recycled through biogeochemical cycles.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-hard-1",
          "question": "A pesticide that does not break down accumulates in organisms' fatty tissues. Top predators are found to have far higher concentrations than producers. This pattern, called biomagnification, occurs because",
          "options": [
            "predators absorb the pesticide directly from water more than prey do",
            "the toxin becomes more concentrated at each higher trophic level as consumers eat many contaminated prey",
            "producers destroy the pesticide",
            "the pesticide is diluted at higher levels"
          ],
          "correctAnswer": 1,
          "explanation": "Persistent toxins concentrate up the food chain: each consumer ingests the accumulated toxin of many prey, so top predators carry the highest concentrations (biomagnification).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-2",
          "question": "A lake receives heavy fertilizer runoff, triggering an algal bloom. The algae later die and decompose, and fish begin to die off. The most direct cause of the fish deaths is that decomposition",
          "options": [
            "removed all the algae's oxygen production",
            "consumed dissolved oxygen in the water, causing hypoxia",
            "raised the water temperature to lethal levels",
            "increased the water's salinity"
          ],
          "correctAnswer": 1,
          "explanation": "In eutrophication, decomposers break down the dead algae and consume large amounts of dissolved oxygen. The resulting oxygen depletion (hypoxia) suffocates fish and other aquatic life.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-3",
          "question": "Sea otters eat sea urchins, which graze on kelp. When otters were hunted nearly to extinction, urchin populations exploded and kelp forests collapsed. This scenario best demonstrates",
          "options": [
            "that otters are producers",
            "a trophic cascade caused by removing a keystone predator",
            "mutualism between otters and urchins",
            "primary succession"
          ],
          "correctAnswer": 1,
          "explanation": "The otter is a keystone predator; its removal caused a trophic cascade—urchins overgrazed the kelp, collapsing the ecosystem. This shows how one species can control community structure.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-4",
          "question": "A population of deer is introduced to an island. It grows rapidly, overshoots the carrying capacity, then crashes to a much lower level before stabilizing. The overshoot-and-crash pattern is best explained by",
          "options": [
            "the immediate action of density-independent factors only",
            "a lag in the effect of limiting factors, so the population exceeds K before resources become scarce",
            "the absence of any limiting factors",
            "exponential growth continuing forever"
          ],
          "correctAnswer": 1,
          "explanation": "Populations can temporarily exceed carrying capacity when growth outpaces resource limits; once resources are depleted, density-dependent factors cause a sharp decline (a crash) before stabilization.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-5",
          "question": "Two similar bird species coexist in the same trees: one feeds at the treetops and the other on the lower branches. This partitioning of the habitat allows coexistence and best illustrates",
          "options": [
            "competitive exclusion",
            "resource partitioning that reduces direct competition",
            "mutualism",
            "the founder effect"
          ],
          "correctAnswer": 1,
          "explanation": "Resource partitioning lets species divide a shared resource (different feeding zones), reducing competition and allowing them to coexist rather than one excluding the other.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-6",
          "question": "An ecologist compares two ecosystems and finds that the one with greater species diversity recovers faster after a disturbance. Which conclusion is best supported?",
          "options": [
            "Diversity has no relationship to ecosystem stability",
            "Higher biodiversity tends to increase an ecosystem's resilience and stability",
            "Low-diversity ecosystems are always more stable",
            "Disturbances always destroy ecosystems permanently"
          ],
          "correctAnswer": 1,
          "explanation": "Greater biodiversity often provides functional redundancy and varied responses to change, increasing an ecosystem's resilience and ability to recover from disturbance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-7",
          "question": "In a food web, a sudden decline in a primary producer would most likely have the greatest immediate effect on",
          "options": [
            "only decomposers",
            "the herbivores that directly depend on that producer, with effects rippling upward",
            "only top predators",
            "abiotic factors like sunlight"
          ],
          "correctAnswer": 1,
          "explanation": "Producers form the energy base of the web. A decline directly reduces food for herbivores, and the effect propagates upward to higher consumers—showing the interconnectedness of trophic levels.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-8",
          "question": "A region's climate warms, and a species is found shifting its range to higher elevations and latitudes over several decades. This response best illustrates that",
          "options": [
            "species are unaffected by climate change",
            "organisms may respond to environmental change by shifting their geographic distribution",
            "climate change reduces all populations equally",
            "evolution cannot occur in response to climate"
          ],
          "correctAnswer": 1,
          "explanation": "As conditions change, many species track suitable climates by shifting their ranges (to cooler, higher, or more poleward areas), a documented response to warming.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-9",
          "question": "A survivorship curve for a species shows very high mortality among the young but high survival for those that reach adulthood (Type III). This pattern is most consistent with a species that",
          "options": [
            "produces few offspring and cares for them intensively",
            "produces many offspring with little parental care, most of which die young",
            "has a constant death rate at all ages",
            "never reproduces"
          ],
          "correctAnswer": 1,
          "explanation": "Type III survivorship (high early mortality) is typical of species producing large numbers of offspring with minimal parental investment, such as many fish and invertebrates—only a few survive to adulthood.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-10",
          "question": "During ecological succession, early pioneer species like lichens and mosses often make the environment less suitable for themselves but more suitable for later species. This phenomenon, where existing species pave the way for others, is called",
          "options": [
            "competitive exclusion",
            "facilitation",
            "biomagnification",
            "genetic drift"
          ],
          "correctAnswer": 1,
          "explanation": "Facilitation occurs when early-succession species modify the environment (e.g., building soil) in ways that enable later species to colonize, driving the progression of succession.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}

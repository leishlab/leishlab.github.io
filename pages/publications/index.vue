<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Publications
        </h1>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-xl text-gray-500">
            List of publications.
          </p>
        </div>
      </div>
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div v-for="item in papers" :key="item.title">
          <p class="text-sm text-gray-500">
            <time :datetime="item.datetime">{{ item.date }}</time>
          </p>
          <a :href="item.href" class="mt-2 block" target="_blank">
            <p class="text-xl font-semibold text-gray-900">
              {{ item.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ item.description }}
            </p>
          </a>
          <div class="mt-3">
            <a :href="item.href" class="text-base font-semibold text-indigo-600 hover:text-indigo-500" target="_blank">
              {{item.href}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            papers : [
              {
                "title": "Novel insights into parasite dynamics for leishmaniasis treatment",
                "href": "https://doi.org/10.32907/RO-126-1919785198",
                "description": "Maria Fernanda Laranjeira da Silva",
                "date": "December 2021",
                "datetime": "December 2021"
              },
              {
                "title": "Lipid and fatty acid metabolism in trypanosomatids",
                "href": "https://doi.org/10.15698/mic2021.11.764",
                "description": "Giovana P. de Aquino, Marco Antonio M. Gomes, Roberto K. Salinas, Maria Fernanda Laranjeira-Silva",
                "date": "October 2021",
                "datetime": "October 2021"
              },
              {
                "title": "One health approach to leishmaniases: understanding the disease dynamics through diagnostic tools",
                "href": "https://doi.org/10.3390/pathogens9100809",
                "description": "Ahyun Hong, Ricardo A. Zampieri, Jeffrey J. Shaw, Lucile Maria Floeter-winter, Maria Fernanda Laranjeira-Silva",
                "date": "October 2020",
                "datetime": "October 2020"
              },
              {
                "title": "Dual transcriptome analysis reveals differential gene expression modulation influenced by Leishmania arginase and host genetic background",
                "href": "https://doi.org/10.1099/mgen.0.000427",
                "description": "Juliana I. Aoki, Sandra M. Muxel, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Karl E. Müller, Audun H. Nerland, Lucile Maria Floeter-Winter",
                "date": "September 2020",
                "datetime": "September 2020"
              },
              {
                "title": "Iron and heme metabolism at the Leishmania-host interface",
                "href": "https://doi.org/10.1016/j.pt.2019.12.010",
                "description": "Maria Fernanda Laranjeira-Silva, Iqbal Hamza, José M. Pérez-Victoria",
                "date": "March 2020",
                "datetime": "March 2020"
              },
              {
                "title": "In vivo infection with Leishmania amazonensis to evaluate parasite virulence in mice",
                "href": "https://doi.org/10.3791/60617",
                "description": "Juliana I. Aoki, Ahyun Hong, Ricardo A. Zampieri, Lucile Maria Floeter-Winter, Maria Fernanda Laranjeira-Silva",
                "date": "February 2020",
                "datetime": "February 2020"
              },
              {
                "title": "The impact of arginase activity on virulence factors of Leishmania amazonensis.",
                "href": "https://doi.org/10.1016/j.mib.2019.06.003",
                "description": "Juliana I. Aoki, Maria Fernanda Laranjeira-Silva, Sandra M. Muxel, Lucile Maria Floeter-Winter",
                "date": "December 2019",
                "datetime": "December 2019"
              },
              {
                "title": "Ascorbate-Dependent Peroxidase (APX) from Leishmania amazonensis is a ROS-induced essential enzyme that regulates virulence.",
                "href": "https://doi.org/10.1128/IAI.00193-19",
                "description": "Lucia Xiang, Maria Fernanda Laranjeira- Silva, Fernando Y. Maeda, Jason Hauzel, Norma W. Andrews, Bidyottam Mittra",
                "date": "November 2019",
                "datetime": "November 2019"
              },
              {
                "title": "Intracellular iron availability modulates the requirement for Leishmania Iron Regulator 1 (LIR1) during macrophage infections",
                "href": "https://doi.org/10.1016/j.ijpara.2019.02.002",
                "description": "Amrita Sarkar, Norma W. Andrews, Maria Fernanda Laranjeira-Silva",
                "date": "March 2019",
                "datetime": "March 2019"
              },
              {
                "title": "A MFS-like plasma membrane transporter required for Leishmania virulence protects the parasites from iron toxicity",
                "href": "https://doi.org/10.1371/journal.ppat.1007140",
                "description": "Maria Fernanda Laranjeira-Silva, Wanpeng Wang, Tamika K. Samuel, Fernando Y. Maeda, Vladimir Michailowsky, Iqbal Hamza, Zhongchi Liu, Norma W. Andrews",
                "date": "June 2018",
                "datetime": "June 2018"
              },
              {
                "title": "Quantification of intracellular growth inside macrophages is a fast and reliable method for assessing the virulence of Leishmania parasites",
                "href": "https://doi.org/10.3791/57486",
                "description": "Amrita Sarkar, Yousuf A. Khan, Maria Fernanda Laranjeira-Silva, Norma W. Andrews, Bidyottam Mittra",
                "date": "March 2018",
                "datetime": "March 2018"
              },
              {
                "title": "Arginine and polyamines fate in Leishmania infection",
                "href": "https://doi.org/10.3389/fmicb.2017.02682",
                "description": "Sandra M. Muxel, Juliana I. Aoki, Juliane C. R. Fernandes, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Stephanie M. Acuña, Karl E. Müller, Rubia H. Vanderlinde, Lucile Maria Floeter-Winter",
                "date": "January 2018",
                "datetime": "January 2018"
              },
              {
                "title": "Arginase expression modulates nitric oxide production in Leishmania (Leishmania) amazonensis",
                "href": "https://doi.org/10.1371/journal.pone.0187186",
                "description": "Stephanie M. Acuña, Juliana I. Aoki, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Juliane C. R. Fernandes, Sandra M. Muxel, Lucile Maria Floeter-Winter",
                "date": "November 2017",
                "datetime": "November 2017"
              },
              {
                "title": "RNA-seq transcriptional profiling of Leishmania amazonensis reveals an arginase-dependent gene expression regulation",
                "href": "https://doi.org/10.1371/journal.pntd.0006026",
                "description": "Juliana I. Aoki, Sandra M. Muxel, Ricardo A. Zampieri, Maria Fernanda Laranjeira-Silva, Karl E. Müller, Audun H. Nerland, Lucile Maria Floeter-Winter",
                "date": "October 2017",
                "datetime": "October 2017"
              },
              {
                "title": "The iron-dependent mitochondrial superoxide dismutase SODA promotes Leishmania virulence",
                "href": "https://doi.org/10.1074/jbc.M116.772624",
                "description": "Bidyottam Mittra, Maria Fernanda Laranjeira-Silva, Danilo C. Miguel, Juliana P. B. de Menezes, Norma W. Andrews",
                "date": "May 2017",
                "datetime": "May 2017"
              },
              {
                "title": "Leishmania (Leishmania) amazonensis induces macrophage miR-294 and miR-721 expression and modulates infection by targeting NOS2 and L-arginine metabolism",
                "href": "https://doi.org/10.1038/srep44141",
                "description": "Sandra M. Muxel, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Lucile Maria Floeter-Winter",
                "date": "March 2017",
                "datetime": "March 2017"
              },
              {
                "title": "Functional validation of miRNA-mRNA interactions in macrophages by inhibition/competition assays based in transient transfection",
                "href": "https://doi.org/10.1038/protex.2017.034",
                "description": "Sandra M. Muxel, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Juliana I. Aoki, Stephanie M. Acuña, Lucile Maria Floeter-Winter",
                "date": "March 2017",
                "datetime": "March 2017"
              },
              {
                "title": "Leishmania infection inhibits macrophage motility by altering F-actin dynamics and the expression of adhesion complex proteins",
                "href": "https://doi.org/10.1111/cmi.12668",
                "description": "Juliana P. B. de Menezes, Amrita Koushik, Satarupa Das, Can Guven, Ariel Siegel, Maria Fernanda Laranjeira-Silva, Wolfgang Losert, Norma W. Andrews",
                "date": "September 2016",
                "datetime": "September 2016"
              },
              {
                "title": "The RelA/cRel Nuclear Factor-KB (NF-KB) dimer, crucial for inflammation resolution, mediates the transcription of the key enzyme in melatonin synthesis in RAW 264.7 macrophages",
                "href": "https://doi.org/10.1111/jpi.12321",
                "description": "Sandra M. Muxel, Maria Fernanda Laranjeira-Silva, Claudia E. C. Sousa, Lucile Maria Floeter-Winter, Regina P. Markus",
                "date": "February 2016",
                "datetime": "February 2016"
              },
              {
                "title": "High resolution melting analysis targeting hsp70 as a fast and efficient method for the discrimination of Leishmania species",
                "href": "https://doi.org/10.1371/journal.pntd.0004485",
                "description": "Ricardo A. Zampieri, Maria Fernanda Laranjeira-Silva, Sandra M. Muxel, Ana Carolina S. de Lima, Jeffrey J. Shaw, Lucile Maria Floeter-Winter",
                "date": "February 2016",
                "datetime": "February 2016"
              },
              {
                "title": "A trypanosomatid iron transporter that regulates mitochondrial function is required for Leishmania amazonensis virulence",
                "href": "https://doi.org/10.1371/journal.ppat.1005340",
                "description": "Bidyottam Mittra, Maria Fernanda Laranjeira-Silva, Juliana P. B. de Menezes, Jennifer Jensen, Vladimir Michailowsky, Norma W. Andrews",
                "date": "January 2016",
                "datetime": "January 2016"
              },
              {
                "title": "Melatonin attenuates Leishmania (L.) amazonensis infection by modulating arginine metabolism",
                "href": "https://doi.org/10.1111/jpi.12279",
                "description": "Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Sandra M. Muxel, Lucile Maria Floeter-Winter, Regina P. Markus",
                "date": "September 2015",
                "datetime": "September 2015"
              },
              {
                "title": "Capillary electrophoresis reveals polyamine metabolism modulation in Leishmania (Leishmania) amazonensis wild-type and arginase knockout mutants under arginine starvation",
                "href": "https://doi.org/10.1002/elps.201500114",
                "description": "Emerson A. Castilho-Martins, Gisele A. B. Canuto, Sandra M. Muxel, Maria Fernanda Laranjeira-Silva, Lucile Maria Floeter-Winter, Carmen del Aguila, Ángeles López-Gonzálvez, Coral Barbas",
                "date": "July 2015",
                "datetime": "July 2015"
              },
              {
                "title": "Arginase in Leishmania",
                "href": "https://doi.org/10.1007/978-94-007-7305-9_4",
                "description": "Maria Fernanda Laranjeira-Silva, Lucile M. Floeter-Winter",
                "date": "October 2013",
                "datetime": "October 2013"
              },
              {
                "title": "Leishmania amazonensis arginase compartmentalization in the glycosome is important for parasite infectivity",
                "href": "https://doi.org/10.1371/journal.pone.0034022",
                "description": "Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Sandra M. Muxel, Stephen M. Beverley, Lucile M. Floeter-Winter",
                "date": "March 2012",
                "datetime": "March 2012"
              },
              {
                "title": "Footprints of a trypanosomatid RNA world: pre-small subunit rRNA processing by spliced leader addition trans-splicing",
                "href": "https://doi.org/10.1590/s0074-02762012000400013",
                "description": "Mario Mayer, Marco G. dos Santos, Maria Fernanda Laranjeira-Silva, Lucile Maria Floeter-Winter",
                "date": "June 2012",
                "datetime": "June 2012"
              },
              {
                "title": "Axenic Leishmania amazonensis promastigotes sense both the external and internal arginine pool distinctly regulating the two transporter-coding genes",
                "href": "https://doi.org/10.1371/journal.pone.0027818",
                "description": "Emerson A. Castilho-Martins, Maria Fernanda Laranjeira-Silva, Marcos G. dos Santos, Sandra M. Muxel, Lucile M. Floeter-Winter",
                "date": "November 2011",
                "datetime": "November 2011"
              },
              {
                "title": "Correlation of meta 1 expression with culture stage, cell morphology and infectivity in Leishmania (Leishmania) amazonensis promastigotes",
                "href": "https://doi.org/10.1590/s0074-02762011000200012",
                "description": "Marcos G. dos Santos, Maria Fernanda Laranjeira-Silva, Ricardo A. Zampieri, Rafaella M. Lafraia, Lucile Maria Floeter-Winter",
                "date": "March 2011",
                "datetime": "March 2011"
              },
              {
                "title": "Biochemical characterization of serine transport in Leishmania (Leishmania) amazonensis",
                "href": "https://doi.org/10.1016/j.molbiopara.2008.11.001",
                "description": "Marcos G. dos Santos, Lisvane S. Paes, Ricardo A. Zampieri, Maria Fernanda Laranjeira-Silva, Ariel M. Silber, Lucile Maria Floeter-Winter",
                "date": "February 2009",
                "datetime": "February 2009"
              },
              {
                "title": "Biochemical and biophysical properties of a highly active recombinant arginase from Leishmania (Leishmania) amazonensis and subcellular localization of native enzyme.",
                "href": "https://doi.org/10.1016/j.molbiopara.2008.02.011",
                "description": "Edson R. da Silva, Maria Fernanda Laranjeira-Silva, Hannes Fischer, Renato A. Mortara, Mario G. Mayer, Karine Framesqui, Ariel M. Sielber, Lucile Maria Floeter-Winter",
                "date": "June 2008",
                "datetime": "June 2008"
              }
            ]
        }
    }
}
</script>

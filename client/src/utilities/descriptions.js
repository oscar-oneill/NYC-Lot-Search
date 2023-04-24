export const description = {
    'violations': {
        info: `
            Violations by the Department of Buildings that are adjudicated by OATH/ECB. There may also be a DOB violation.
        `
    },
    'complaints': {
        info: `
            This is the universe of complaints received by Department of Buildings (DOB). 
            It includes complaints that come from 311 or that are entered into the system by DOB staff.
        `
    },
    'repairs': {
        info: `
            HPD issues an Order to Repair/Vacate Order when a property is uninhabitable (either in part or as a whole) due to physical conditions, including lack of essential services, lack of appropriate egress, fire damage or other serious maintenance conditions.
        `
    },
    'infestations': {
        info: `
            Property owners are required to obtain bedbug infestation history from tenants or a dwelling unit owner. 
            This dataset captures the bedbug infestation history as reported by the property owner.
            <br/><br/>
            Local Law 69 of 2017 requires that all multiple dwelling property owners must attempt to obtain the bed bug infestation history from the tenant or unit owner, including whether eradication measures were employed for a bedbug infestation. 
            The information reported in this file is self-reported information filed annually by property owners. 
            Once the Bed Bug Annual Report has been filed, the property owner is required to either provide the filing receipt to each tenant (upon commencement of a new lease and with each lease renewal) OR post the filing receipt in a prominent location in the building. 
            <br/><br/>
            In addition, the property owner must either distribute to each tenant or post the DOHMH Preventing and Getting Rid of Bedbugs Safely guide, which provides information on the prevention, detection, and removal of bedbugs. 
            Each record in the file represents a filing completed. If a property has submitted two records for the same period, the second filing is the active final submission for the period.
        `
    },
    'taxliens': {
        info: `
            Properties with tax and/or water liens that are potentially eligible to be included in the next lien sale.
            <br/><br/>
            Tax Lien Sale Lists: Properties with tax, water liens and other charges that are potentially eligible to be included in the next lien sale plus tax liens which were eventually sold.
        `
    },
    'restaurants': {
        info: `
            The dataset contains every sustained or not yet adjudicated violation citation from every full or special program inspection conducted up to three years prior to the most recent inspection for restaurants and college cafeterias in an active status on the RECORD DATE (date of the data pull). When an inspection results in more than one violation, values for associated fields are repeated for each additional violation record. Establishments are uniquely identified by their CAMIS (record ID) number. Keep in mind that thousands of restaurants start business and go out of business every year; only restaurants in an active status are included in the dataset.
            <br/><br/>
            Records are also included for each restaurant that has applied for a permit but has not yet been inspected and for inspections resulting in no violations. Establishments with inspection date of 1/1/1900 are new establishments that have not yet received an inspection. Restaurants that received no violations are represented by a single row and coded as having no violations using the ACTION field.
            <br/><br/>
            Because this dataset is compiled from several large administrative data systems, it contains some illogical values that could be a result of data entry or transfer errors. Data may also be missing.
            This dataset and the information on the Health Department’s Restaurant Grading website come from the same data source. The Health Department’s Restaurant Grading website is <a href='http://www1.nyc.gov/site/doh/services/restaurant-grades.page'>here</a>
        `
    },
    'start': {
        info: `Welcome to the NYC Property Data Search. This is an all-encompassing tool to provide the public with critical information about various properties throughout the city of New York.`
    },
    'tips': {
        info: `
            Here are some helpful tips for getting started with the property search.        
        `
    }
}
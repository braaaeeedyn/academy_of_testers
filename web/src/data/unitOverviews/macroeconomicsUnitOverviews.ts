import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

const RAW_MACROECONOMICS = `AP Macroeconomics

Unit 1 – Basic Economic Concepts

1.1 Scarcity

Economics starts with one basic problem: scarcity. Human wants are virtually unlimited, but the resources available to satisfy them (land, labor, capital, and entrepreneurship) are finite. Scarcity forces every individual, business, and government to make choices about how to allocate resources. These choices always involve trade-offs, because a resource used for one purpose cannot be used for another.

There are four factors of production, the inputs used to make goods and services. Land means all natural resources, including minerals, water, and arable soil. Labor is the human effort, both physical and intellectual, that goes into production. Capital is the tools, machinery, factories, and technology used to produce goods and services, not money itself, which is financial capital. Entrepreneurship is the ability to organize the other factors, take risks, and innovate. Each factor earns a return: land earns rent, labor earns wages, capital earns interest, and entrepreneurship earns profit.

Scarcity applies to every economy, however wealthy, and even the richest nations cannot produce everything their citizens want. The study of economics is essentially the study of how societies manage scarcity. Every society has to decide what to produce, how to produce it, and for whom to produce it. These are the three basic economic questions, and societies answer them through markets, government planning, or some combination of the two.

Key ideas: Scarcity, unlimited wants versus limited resources, is the basic economic problem. The four factors of production are land, labor, capital, and entrepreneurship. Scarcity forces choices and trade-offs in every economy. The three basic questions are what to produce, how to produce it, and for whom to produce it.

1.2 Opportunity Cost and the Production Possibilities Curve (PPC)

Opportunity cost is the value of the next best alternative you give up when you make a choice. It is the value of what you sacrifice, which may be more than the money a decision costs. Suppose a student spends an hour studying economics instead of working at a job that pays fifteen dollars per hour. The opportunity cost of studying is fifteen dollars, plus whatever enjoyment or other benefit the work would have provided. Every decision has an opportunity cost because resources are scarce.

The Production Possibilities Curve (PPC) is a model that illustrates scarcity, opportunity cost, and efficiency. It shows the maximum combinations of two goods an economy can produce when all its resources are fully and efficiently employed. Points on the curve represent efficient production, with all resources in use, while points inside the curve represent inefficiency, because resources are unemployed or misallocated. Points outside the curve are currently unattainable with existing resources and technology.

The PPC is typically bowed outward (concave to the origin), which reflects the law of increasing opportunity costs. As an economy shifts production from one good to another, each additional unit costs more of the other good. That happens because resources are not equally suited to producing both goods, so shifting farmland to factory production, for example, yields diminishing returns. The best farmland is converted first, and the land that remains is less suitable for factories.

Economic growth, an outward shift of the entire PPC, can result from more or better resources (more workers, better technology, discovery of new resources). It can also come from improvements in productivity. Investment in capital goods or education shifts the PPC outward over time, though it requires giving up some consumption now.

Key ideas: Opportunity cost is the value of the next best alternative forgone. The PPC shows maximum output combinations given scarce resources. Points on the PPC are efficient; inside is inefficient; outside is unattainable. The bowed-out shape reflects increasing opportunity costs. Economic growth shifts the PPC outward.

1.3 Comparative Advantage and Trade

Specialization and trade can make all parties better off, even when one party is more productive at everything. This insight, one of the most important in economics, rests on the concept of comparative advantage. A country (or individual or firm) has a comparative advantage in a good if it can produce that good at a lower opportunity cost than another producer. Absolute advantage is different. It simply means being able to produce more of a good with the same resources.

Consider two countries. Country A can produce either 10 units of wheat or 5 units of cloth, while Country B can produce either 4 units of wheat or 4 units of cloth. Country A has an absolute advantage in both goods, since it can produce more of each. However, Country A's opportunity cost of 1 cloth is 2 wheat, while Country B's opportunity cost of 1 cloth is only 1 wheat. Country B therefore has a comparative advantage in cloth, and Country A has a comparative advantage in wheat. If each country specializes in its comparative advantage good and then trades, both can consume beyond their individual PPCs.

The terms of trade, the rate at which goods are exchanged, must fall between the opportunity costs of the two trading partners for both to benefit. In our example, the terms of trade for cloth must be between 1 wheat (Country B's opportunity cost) and 2 wheat (Country A's opportunity cost) per unit of cloth.

Comparative advantage explains why countries trade and why free trade can increase total world output, but trade also creates winners and losers within countries. Industries that face import competition may shrink and displace workers, even as consumers benefit from lower prices and greater variety.

Key ideas: Comparative advantage means producing at a lower opportunity cost, not necessarily producing more. Specialization based on comparative advantage and trade benefits all parties. Terms of trade must fall between the trading partners' opportunity costs. Trade increases total output but creates winners and losers within countries.

1.4 Demand

Demand is the quantity of a good or service that consumers are willing and able to buy at various prices during a given time period. It assumes all else stays equal, which economists call ceteris paribus. The law of demand says price and quantity demanded have an inverse relationship: as price rises, quantity demanded falls, and vice versa. This relationship produces a downward-sloping demand curve.

Two effects explain the slope. The substitution effect: when a good's price rises, consumers switch to cheaper alternatives. The income effect: when a good's price rises, consumers' purchasing power effectively falls, so they buy less. Market demand is the horizontal summation of all the individual demand curves in a market, meaning you add up the quantities demanded at each price.

A change in price causes a movement along the demand curve, called a change in quantity demanded. A change in any non-price determinant of demand shifts the entire demand curve, called a change in demand. The non-price determinants include consumer tastes and preferences and the number of buyers in the market. Consumer income is another. Normal goods see demand rise when income rises, while inferior goods see demand fall. The rest are prices of related goods (substitutes and complements) and consumer expectations about future prices or income.

Key ideas: The law of demand shows an inverse relationship between price and quantity demanded. Price changes cause movements along the curve; non-price determinants shift the entire curve. Non-price determinants include tastes, number of buyers, income, related goods' prices, and expectations. Market demand is the sum of all individual demand curves.

1.5 Supply

Supply is the quantity of a good or service that producers are willing and able to offer for sale at various prices during a given time period, ceteris paribus. The law of supply says price and quantity supplied have a direct (positive) relationship: as price rises, quantity supplied rises. Higher prices make production more profitable and give firms an incentive to produce more, and this relationship produces an upward-sloping supply curve.

A change in price causes a movement along the supply curve, called a change in quantity supplied. A change in any non-price determinant of supply shifts the entire supply curve, called a change in supply. The non-price determinants include input prices (wages, raw materials, energy costs) and technology, since improvements shift supply rightward by reducing production costs. They also include the number of sellers in the market and expectations about future prices. Government policies matter as well. Taxes shift supply leftward by increasing costs, subsidies shift it rightward by reducing costs, and regulations can increase costs. The last determinant is the prices of related goods in production.

An increase in supply means the supply curve shifts rightward: firms are willing to supply more at every price. A decrease in supply means the curve shifts leftward, so firms supply less at every price. Keep two ideas apart. A change in quantity supplied is a movement along the curve caused by a price change. A change in supply is a shift of the entire curve caused by a non-price factor.

Key ideas: The law of supply shows a positive relationship between price and quantity supplied. Price changes cause movements along the curve; non-price determinants shift the entire curve. Non-price determinants include input prices, technology, number of sellers, expectations, and government policies. Always tell a movement along the curve apart from a shift of the curve.

1.6 Market Equilibrium, Disequilibrium, and Changes in Equilibrium

Market equilibrium is the price and quantity at which quantity demanded equals quantity supplied. On a graph, it is where the demand and supply curves intersect. At the equilibrium price, there is no surplus (excess supply) and no shortage (excess demand). The market clears. Every unit produced is sold, and every buyer willing to pay the equilibrium price can get the good.

Disequilibrium happens when the market price is above or below equilibrium. If the price is above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus. Sellers with unsold inventory compete by cutting prices, which pushes the price down toward equilibrium. If the price is below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage. Buyers who cannot get the good compete by offering more, which pushes the price up toward equilibrium. Markets naturally tend toward equilibrium through these price adjustments.

Equilibrium changes when demand, supply, or both shift. An increase in demand (rightward shift) raises both equilibrium price and quantity, and a decrease in demand (leftward shift) lowers both. An increase in supply (rightward shift) lowers the equilibrium price and raises quantity. A decrease in supply (leftward shift) raises price and lowers quantity. When both curves shift at once, the effect on one variable (price or quantity) is determinate, meaning you can predict its direction. The effect on the other depends on the relative sizes of the shifts.

Key ideas: Equilibrium occurs where quantity demanded equals quantity supplied. Surpluses drive prices down; shortages drive prices up, moving the market toward equilibrium. Shifts in demand or supply change equilibrium price and quantity. Simultaneous shifts produce one determinate and one indeterminate effect.

Unit 2 – Economic Indicators and the Business Cycle

2.1 Circular Flow and GDP

The circular flow model shows how money, goods, services, and resources move between households and firms. They move through two kinds of markets: product markets and factor (resource) markets. Households supply factors of production (labor, land, capital, entrepreneurship) to firms through factor markets. In return they receive income (wages, rent, interest, profit). Firms use these factors to produce goods and services, which they sell to households through product markets. Households spend their income on those goods and services, which completes the flow.

The government sector adds taxation (a leakage, money drawn out of the flow) and government spending (an injection, money added to it). The foreign sector adds exports (an injection) and imports (a leakage). The financial sector channels savings (a leakage) into investment (an injection) through banks and other intermediaries. When total injections equal total leakages, the economy is in equilibrium.

Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country's borders during a specific time period, usually one year. One way to measure GDP is the expenditure approach: GDP = C + I + G + (X - M). Here C is consumer spending, and I is investment, meaning business spending on capital goods, residential construction, and changes in inventories. G is government spending on goods and services, and (X - M) is net exports. GDP can also be measured with the income approach, which adds up all the incomes earned in production (wages, rent, interest, profit).

Key ideas: The circular flow shows money and resources flowing between households, firms, government, and foreign sectors. Injections (investment, government spending, exports) and leakages (savings, taxes, imports) must balance in equilibrium. GDP measures total market value of final goods and services produced within a country. The expenditure approach: GDP = C + I + G + (X - M).

2.2 Limitations of GDP

GDP is the most widely used measure of economic activity, but it has significant limits as a measure of economic well-being. It does not capture how income is distributed. A country with high GDP could have extreme inequality, with most of the wealth concentrated among a few. GDP also leaves out non-market production. That includes household work (cooking, cleaning, childcare), volunteer work, and the informal economy, meaning unreported economic activity, which is substantial in many developing countries.

GDP does not measure the quality of goods and services, leisure time, environmental quality, or overall quality of life. Picture a country that produces enormous GDP by working its citizens to exhaustion while polluting its environment. It is not necessarily better off than one with lower GDP but more leisure, cleaner air, and better health outcomes. GDP actually increases when negative events occur. Natural disasters boost GDP through reconstruction spending, and increased crime raises GDP through spending on police, prisons, and security systems.

GDP does not capture the underground economy (illegal activities, unreported income, barter transactions). It does not account for environmental degradation either. A factory that produces goods while polluting a river shows up only as production, with no entry for the environmental loss. GDP also makes no distinction between productive and unproductive spending.

There are alternative measures. GDP per capita adjusts for population size but still ignores distribution. The Human Development Index (HDI) combines income, education, and life expectancy. The Genuine Progress Indicator (GPI) adjusts for inequality, environmental damage, and other factors, and Gross National Happiness was developed by Bhutan.

Key ideas: GDP does not measure income distribution, non-market production, environmental quality, or quality of life. GDP increases from negative events like disasters and crime. The underground and informal economies are excluded from GDP. Alternative measures like HDI and GPI attempt to capture broader well-being.

2.3 Unemployment

Unemployment means people who are actively looking for work cannot find jobs. The unemployment rate is the number of unemployed divided by the labor force (employed plus unemployed), expressed as a percentage. The labor force leaves out people who are not working and not actively seeking work. Students, retirees, stay-at-home parents, and discouraged workers (people who have given up looking for work) are not counted as unemployed.

There are three main types of unemployment. Frictional unemployment is short-term unemployment while people are between jobs, entering the workforce for the first time, or re-entering after an absence. It exists even in healthy economies. It is generally considered normal and even beneficial, because it reflects workers searching for better matches. Structural unemployment happens when workers' skills do not match the available jobs. Technological change, shifts in consumer demand, or geographic mismatch often cause it, and it is longer-lasting and more of a problem. Cyclical unemployment occurs during economic downturns, when overall demand for goods and services falls and firms lay off workers. It rises during recessions and falls during expansions.

The natural rate of unemployment (NRU) is the unemployment rate when the economy is at full employment. At full employment, only frictional and structural unemployment exist, and there is no cyclical unemployment. So full employment does not mean zero unemployment. The NRU in the United States is typically estimated at 4–6 percent. When the actual unemployment rate equals the NRU, the economy is producing at its potential output, on the long-run aggregate supply curve.

Key ideas: The unemployment rate is unemployed divided by the labor force. Frictional unemployment is normal job-searching; structural is skills mismatch; cyclical is recession-driven. The natural rate of unemployment includes only frictional and structural unemployment. Full employment means zero cyclical unemployment, not zero total unemployment.

2.4 Price Indices and Inflation

Inflation is a sustained increase in the general price level of goods and services in an economy. It is measured with price indices, which track the cost of a fixed basket of goods and services over time. The Consumer Price Index (CPI) measures the average change in prices that urban consumers pay for a representative basket of consumer goods and services. The GDP deflator measures the price level of all goods and services included in GDP, which makes it broader than the CPI.

To calculate the CPI, divide the cost of the market basket in the current year by its cost in the base year, then multiply by 100. The inflation rate is the percentage change in the price index from one period to the next: Inflation Rate = [(CPI current - CPI previous) / CPI previous] × 100.

The CPI has known biases that make it overstate inflation, and the first, substitution bias, arises because the fixed basket ignores consumers switching to cheaper alternatives when prices rise. New product bias arises because the basket may leave out new products that offer better value. Quality change bias arises because the index does not fully capture improvements in product quality. A computer that costs the same as last year's model but is twice as powerful has effectively fallen in price.

Deflation, a sustained decrease in the general price level, is generally considered more dangerous than moderate inflation. It increases the real burden of debt. It discourages spending, because consumers delay purchases while they expect lower prices. It can also trigger a deflationary spiral of falling demand, falling production, and rising unemployment.

Key ideas: Inflation is a sustained increase in the general price level, measured by the CPI and GDP deflator. The inflation rate is the percentage change in the price index over time. The CPI overstates inflation due to substitution, new product, and quality change biases. Deflation is generally more dangerous than moderate inflation because it increases real debt burdens and discourages spending.

2.5 Costs of Inflation

Inflation imposes real costs on the economy, and how large they are depends on whether the inflation is anticipated or unanticipated. When inflation is anticipated, meaning people expect it and can plan for it, the costs are relatively modest. Menu costs are the costs of changing listed prices (reprinting menus, reprogramming vending machines, updating catalogs). Shoe-leather costs are the time and effort spent managing money to limit inflation's impact, such as making more frequent trips to the bank and holding less cash.

Unanticipated inflation causes more serious problems, because it redistributes wealth in ways no one intended. Borrowers gain at the expense of lenders, since they repay loans with money worth less than when they borrowed it. Fixed-income earners (retirees on fixed pensions, workers with long-term contracts) watch their purchasing power erode. Savers lose if the interest rate on their savings is lower than the inflation rate, which is a negative real interest rate.

Unanticipated inflation also creates uncertainty that discourages long-term investment and planning, and businesses struggle to set prices and forecast costs. Wage negotiations become contentious as workers push for raises to keep up with inflation. International competitiveness can suffer if domestic inflation runs higher than that of trading partners, because exports become more expensive and imports cheaper.

Hyperinflation (extremely rapid inflation, typically exceeding 50 percent per month) destroys the functioning of money as a medium of exchange and a store of value. Historical examples include Germany in 1923, Zimbabwe in the 2000s, and Venezuela in the late 2010s. Hyperinflation devastates economies and wipes out savings, and it typically requires drastic monetary reform.

Key ideas: Anticipated inflation causes menu costs and shoe-leather costs. Unanticipated inflation redistributes wealth from lenders and savers to borrowers. Fixed-income earners are particularly hurt by unexpected inflation. Hyperinflation destroys money's functions and devastates economies.

2.6 Real vs. Nominal GDP

Nominal GDP measures the value of output at current-year prices. Because it includes the effects of both changes in output and changes in prices, nominal GDP can increase even if actual production has not grown, simply because prices have risen (inflation). That makes nominal GDP a misleading measure of economic growth over time.

Real GDP adjusts nominal GDP for changes in the price level, separating the change in actual output from the change in prices. It is calculated with the GDP deflator: Real GDP = (Nominal GDP / GDP Deflator) × 100. Because it holds prices constant at a base-year level, real GDP allows meaningful comparisons of economic output across different time periods.

The difference between real and nominal values applies throughout economics. The nominal interest rate is the stated rate, and the real interest rate adjusts it for inflation. The Fisher equation gives Real Interest Rate = Nominal Interest Rate - Inflation Rate. The nominal wage is the dollar amount earned, and the real wage adjusts for purchasing power. Rational agents should focus on real values when making economic decisions, because real values reflect actual purchasing power.

If nominal GDP grows by 5 percent but prices also rise by 5 percent, real GDP growth is zero. The economy has not actually produced more goods and services. Real output has increased only when nominal GDP growth exceeds inflation. Real GDP per capita (real GDP divided by population) is the best simple measure of the average standard of living over time.

Key ideas: Nominal GDP uses current prices and can rise from inflation alone. Real GDP adjusts for price changes and measures actual output growth. Real GDP = (Nominal GDP / GDP Deflator) × 100. The Fisher equation: Real Interest Rate = Nominal Interest Rate - Inflation Rate. Real values, not nominal, reflect true purchasing power.

2.7 Business Cycles

Business cycles are recurring swings in economic activity, with periods of expansion (growth) and contraction (recession). A typical business cycle has four phases. During expansion, real GDP rises, unemployment falls, and inflation is moderate. The peak is the highest point of economic activity before a downturn, and during contraction, or recession, real GDP falls, unemployment rises, and prices fall or hold stable. The trough is the lowest point before recovery begins.

A recession is commonly defined as two or more consecutive quarters of declining real GDP. The National Bureau of Economic Research (NBER), though, uses a broader definition that considers employment, income, and other indicators. During recessions, cyclical unemployment rises, business profits fall, and consumer and business confidence decline, while government tax revenues decrease and spending on safety-net programs increases.

Leading economic indicators are statistics that tend to change before the overall economy changes direction, so they "lead" the business cycle. Examples include stock market performance, new building permits, consumer confidence surveys, and new orders for manufactured goods. Lagging indicators change after the economy has already shifted, like the unemployment rate and corporate profits. Coincident indicators change at the same time as the overall economy, like real GDP and industrial production.

In developed economies, the long-run trend of real GDP is upward (economic growth). The path is not smooth, though, because business cycles cause fluctuations around this trend. Macroeconomic policy (fiscal and monetary) tries to smooth these fluctuations. It stimulates the economy during recessions and cools it during inflationary expansions.

Key ideas: Business cycles consist of expansion, peak, contraction, and trough. Recessions feature declining real GDP, rising unemployment, and falling business activity. Leading indicators predict turns; lagging indicators confirm them; coincident indicators move with the economy. Macroeconomic policy aims to smooth business cycle fluctuations.

Unit 3 – National Income and Price Determination

3.1 Aggregate Demand

Aggregate demand (AD) is the total quantity of goods and services demanded across all sectors of the economy at each price level. The price level is the average level of prices across the whole economy. The AD curve slopes downward. As the overall price level falls, the total quantity of goods and services demanded increases, and vice versa. Three effects explain this downward slope.

The first is the wealth effect, also called the real balances effect. When the price level falls, the real value of money holdings rises. Consumers feel wealthier and increase their consumption spending. The second is the interest rate effect. When the price level falls, households and firms need less money for transactions, which reduces the demand for money and lowers interest rates. Lower interest rates stimulate investment spending. The third is the net export effect. When the domestic price level falls relative to foreign price levels, domestic goods become cheaper for foreigners, so exports rise. Foreign goods become relatively more expensive for domestic consumers, so imports fall. Net exports increase.

The components of AD match the GDP expenditure equation: AD = C + I + G + (X - M). A change in any of these components that is not caused by a price-level change shifts the entire AD curve. An increase in consumer confidence, government spending, investment, or net exports shifts AD rightward, and a decrease shifts it leftward. Changes in the money supply also shift AD. An increase in the money supply lowers interest rates, which stimulates investment and shifts AD rightward.

Key ideas: Aggregate demand shows the total quantity demanded at each price level. The AD curve slopes downward due to the wealth effect, interest rate effect, and net export effect. AD = C + I + G + (X - M). Non-price-level changes in spending components shift the entire AD curve.

3.2 Spending and Tax Multipliers

The spending multiplier (also called the expenditure multiplier) captures how an initial change in spending produces a larger change in real GDP. Suppose the government spends an additional dollar: the recipient earns that dollar as income and spends a fraction of it. The size of that fraction is the marginal propensity to consume (MPC). The spent portion becomes someone else's income, and that person in turn spends a fraction, and so on. This chain of spending amplifies the initial injection.

The spending multiplier = 1 / (1 - MPC) = 1 / MPS, where MPS is the marginal propensity to save (MPS = 1 - MPC). If the MPC is 0.8, the spending multiplier is 1 / 0.2 = 5. A $100 increase in government spending then ultimately increases real GDP by $500.

The tax multiplier is smaller than the spending multiplier, because a tax cut does not turn directly into spending. Consumers save a fraction of any tax cut. The tax multiplier = -MPC / (1 - MPC) = -MPC / MPS, so with an MPC of 0.8, the tax multiplier is -0.8 / 0.2 = -4. A $100 tax cut increases GDP by $400, less than the $500 from a $100 spending increase. The negative sign means taxes and GDP move in opposite directions. A tax increase reduces GDP, and a tax cut increases it.

The balanced budget multiplier says that raising government spending and taxes by equal amounts still increases GDP by the amount of the spending increase (the multiplier is 1). This happens because the spending multiplier is larger than the tax multiplier.

Key ideas: The spending multiplier = 1 / MPS; initial spending changes are amplified through successive rounds of spending. The tax multiplier = -MPC / MPS; it is smaller than the spending multiplier. A tax cut is less stimulative than an equal increase in government spending. The balanced budget multiplier equals 1.

3.3 Short-Run Aggregate Supply (SRAS)

Short-run aggregate supply (SRAS) is the total quantity of goods and services firms are willing and able to produce at each price level in the short run. In the short run, at least some input prices, especially wages, are fixed or sticky (slow to change). The SRAS curve slopes upward. As the price level rises, output prices increase while input costs stay temporarily fixed, so production becomes more profitable and firms produce more.

The SRAS curve shifts with changes in input prices, productivity, or supply shocks. An increase in input prices (higher wages, higher energy costs, higher raw material prices) shifts SRAS leftward. Production has become more costly, so firms supply less at every price level. A decrease in input prices shifts SRAS rightward. Improvements in productivity, meaning more output from the same inputs, also shift SRAS rightward. Negative supply shocks (natural disasters, wars, oil embargoes) shift SRAS leftward. Government policies like changes in business taxes, subsidies, or regulations shift SRAS too.

Stagflation, the combination of rising prices and falling output, occurs when SRAS shifts leftward (a negative supply shock). It is one of the hardest macroeconomic situations to address. Policies that fight inflation (contractionary policies) worsen unemployment, while policies that fight unemployment (expansionary policies) worsen inflation.

Key ideas: SRAS is upward-sloping because sticky input prices make production more profitable when output prices rise. Changes in input prices, productivity, or supply shocks shift the SRAS curve. A leftward shift in SRAS causes stagflation: rising prices with falling output. Stagflation presents a difficult policy dilemma because fighting one problem worsens the other.

3.4 Long-Run Aggregate Supply (LRAS)

Long-run aggregate supply (LRAS) is the total quantity of goods and services the economy can produce once all prices, including wages, have fully adjusted. The LRAS curve is vertical at the full-employment level of output (potential GDP or Yf). That means in the long run, the price level does not affect the economy's total output. Output depends solely on the quantity and quality of resources and technology.

The vertical LRAS reflects the classical economic view that the economy tends toward full employment in the long run. At potential GDP, the economy operates at the natural rate of unemployment, where only frictional and structural unemployment exist. Changes in the price level do not change the economy's productive capacity; they only change nominal values.

The LRAS curve shifts when the economy's productive capacity changes. That can come from changes in the quantity or quality of resources (labor force growth, capital accumulation, discovery of natural resources). It can also come from improvements in technology and productivity. An increase in any factor of production or an improvement in technology shifts LRAS rightward, which represents economic growth. Education and training that improve human capital (workers' skills and knowledge) shift LRAS rightward. So do investment in physical capital and institutional improvements such as better property rights and less corruption.

The relationship between SRAS and LRAS matters. In the short run, the economy can operate above or below potential GDP, and when actual GDP exceeds potential GDP (a positive output gap), inflationary pressures build. When actual GDP is below potential GDP (a negative output gap or recessionary gap), unemployment is higher than the natural rate. In the long run, the economy adjusts back to LRAS through changes in wages and other input prices.

Key ideas: LRAS is vertical at potential GDP, indicating output is determined by resources and technology, not the price level. At potential GDP, the economy is at the natural rate of unemployment. LRAS shifts with changes in productive capacity: resource quantity/quality, technology, and institutions. The economy can temporarily operate above or below potential GDP but adjusts back in the long run.

3.5 Equilibrium in the AD-AS Model

The AD-AS model combines aggregate demand, short-run aggregate supply, and long-run aggregate supply to determine the economy's price level and real GDP. Short-run equilibrium is where the AD and SRAS curves intersect, which sets the current price level and output. Long-run equilibrium occurs when AD, SRAS, and LRAS all intersect at the same point, where the economy is at full employment with stable prices.

An economy in short-run equilibrium but not long-run equilibrium has either a recessionary gap or an inflationary gap. In a recessionary gap, short-run equilibrium output is below potential GDP, so unemployment is above the natural rate and resources are underused. In an inflationary gap, short-run equilibrium output exceeds potential GDP, so unemployment is below the natural rate and the economy is overheating.

In a recessionary gap, workers who are unemployed or underemployed eventually accept lower wages. That reduces firms' costs and shifts SRAS rightward until long-run equilibrium returns at potential GDP with a lower price level. In an inflationary gap, tight labor markets drive wages up. That raises firms' costs and shifts SRAS leftward until long-run equilibrium returns at potential GDP with a higher price level. This self-adjustment works through wage and price flexibility. It can be slow and painful, though, which is why governments often step in with fiscal and monetary policy.

Key ideas: Short-run equilibrium is where AD and SRAS intersect; long-run equilibrium adds LRAS at the same point. A recessionary gap means output is below potential GDP with high unemployment. An inflationary gap means output exceeds potential GDP with overheating. Self-adjustment works through wage flexibility but can be slow, motivating policy intervention.

3.6 Changes in the AD-AS Model in the Short Run

Demand shocks and supply shocks cause short-run changes in the AD-AS model that move the economy away from long-run equilibrium. A positive demand shock is an increase in AD, for example from greater consumer confidence, government spending, money supply, or net exports. It shifts AD rightward and raises both the price level and real GDP in the short run, which creates an inflationary gap. A negative demand shock (a decrease in AD) shifts AD leftward, and both the price level and real GDP fall, creating a recessionary gap.

A negative supply shock is a decrease in SRAS, for example from higher input prices, natural disasters, or supply disruptions. It shifts SRAS leftward, raising the price level while lowering real GDP, and this combination of higher prices and lower output is stagflation. A positive supply shock (a decrease in input prices, a technological breakthrough) shifts SRAS rightward. It lowers the price level while raising real GDP, the best possible outcome.

The AD-AS model lets you trace the effects of specific events through the economy. An increase in oil prices raises production costs and shifts SRAS leftward; the price level rises and output falls (stagflation). An increase in consumer confidence raises consumption and shifts AD rightward, so the price level and output both rise. A decrease in the money supply raises interest rates and reduces investment, so AD shifts leftward and the price level and output both fall.

Key ideas: Positive demand shocks increase both price level and output; negative demand shocks decrease both. Negative supply shocks cause stagflation (higher prices, lower output). Positive supply shocks lower prices while increasing output. The AD-AS model traces specific economic events through their effects on price level and real GDP.

3.7 Long-Run Self-Adjustment

The classical view holds that the economy is self-correcting. Through the adjustment of wages and prices, it returns to full employment in the long run without government intervention. In a recessionary gap, surplus labor (unemployment) puts downward pressure on wages. As wages fall, firms' production costs drop, and SRAS shifts rightward until output returns to potential GDP at a lower price level. In an inflationary gap, labor shortages put upward pressure on wages. As wages rise, firms' costs increase, and SRAS shifts leftward until output returns to potential GDP at a higher price level.

This self-adjustment works, but it can be slow, especially in recessions. Wages tend to be "sticky downward," because workers and unions resist wage cuts and minimum wage laws set a floor. Keynesian economists argue that waiting for self-correction can mean prolonged suffering: years of high unemployment and lost output. They argue that fiscal and monetary policy can speed the return to full employment.

One of the central disputes in macroeconomics is between two camps. Classical and monetarist economists trust the market's self-correcting mechanisms, while Keynesian economists call for active government intervention. In practice, most governments use some combination of both approaches, allowing market adjustments while intervening during severe downturns.

Key ideas: The economy self-corrects through wage and price adjustments in the long run. In recessions, falling wages shift SRAS rightward; in inflationary gaps, rising wages shift SRAS leftward. Self-adjustment can be slow due to sticky wages, particularly downward. The classical vs. Keynesian debate centers on whether government intervention is needed to speed adjustment.

3.8 Fiscal Policy

Fiscal policy is the use of government spending and taxation to influence the economy. The legislative and executive branches of government carry it out (Congress and the President in the United States). Expansionary fiscal policy means increasing government spending and/or cutting taxes. It fights recessions by shifting AD rightward, which raises output and employment. Contractionary fiscal policy means decreasing government spending and/or raising taxes. It fights inflation by shifting AD leftward, which eases pressure on prices.

Government spending raises AD directly, since it is a component of the GDP equation. Tax changes work indirectly. A tax cut increases disposable income (income after taxes), which increases consumption spending and shifts AD rightward. Because of this indirect channel, the tax multiplier is smaller than the spending multiplier (as discussed in 3.2).

Fiscal policy faces several limits. There are time lags. The recognition lag is the time to identify the problem, and the legislative lag is the time to pass legislation. The implementation lag is the time for spending or tax changes to take effect. Political constraints may also prevent the best policy, since politicians may be reluctant to cut spending or raise taxes even when contractionary policy is needed. Finally, there is crowding out. Government borrowing to finance deficit spending raises interest rates, which reduces private investment and partly offsets the stimulus.

Key ideas: Expansionary fiscal policy (more spending, lower taxes) fights recessions; contractionary policy (less spending, higher taxes) fights inflation. Government spending has a larger multiplier effect than tax changes. Fiscal policy faces time lags, political constraints, and potential crowding out. Fiscal policy shifts AD but does not directly affect SRAS or LRAS.

3.9 Automatic Stabilizers

Automatic stabilizers are government programs and tax structures that adjust on their own to stabilize the economy, with no new legislation required. They work countercyclically, providing stimulus during recessions and restraint during expansions, without any deliberate policy action.

On the revenue side, progressive income taxes are the most important automatic stabilizer. A progressive tax takes a larger share of income as income rises. During expansions, rising incomes push people into higher tax brackets, and tax revenue rises automatically, which slows the growth of spending. During recessions, falling incomes move people into lower brackets, and tax revenue falls automatically, leaving more money in consumers' pockets to spend. This moderates both booms and busts.

On the spending side, the automatic stabilizers are transfer payments like unemployment insurance, food assistance (SNAP), and welfare programs. During recessions, more people qualify for these programs, so government spending rises automatically and supports consumer demand. During expansions, fewer people qualify, so spending falls automatically. These programs provide a safety net that prevents the sharpest drops in consumer spending during downturns.

Automatic stabilizers are valuable because they act immediately, with no recognition, legislative, or implementation lags, and they need no political consensus. However, they are not powerful enough to fully offset severe recessions, so discretionary fiscal policy (deliberate changes in spending and taxes) is typically needed during major downturns. Automatic stabilizers also add to budget deficits during recessions, through lower tax revenue and higher spending, and to budget surpluses during expansions.

Key ideas: Automatic stabilizers adjust the economy without new legislation. Progressive taxes automatically raise revenue in booms and reduce it in recessions. Transfer payments (unemployment insurance, SNAP) automatically increase spending in recessions. Automatic stabilizers act immediately but are insufficient to offset severe recessions alone.

Unit 4 – Financial Sector

4.1 Financial Assets

Financial assets are instruments that represent a claim on future income or assets, and the main categories are money, bonds, and stocks. Money (cash and checking deposits) is the most liquid asset. Bonds are debt instruments that represent a loan from the buyer to the issuer. Stocks are equity instruments that represent ownership in a corporation. Each asset involves trade-offs among liquidity (how quickly and easily it can be turned into cash), risk (the probability of losing value), and return (the income or capital gains it generates).

Bonds are IOUs issued by governments or corporations, so when you buy a bond, you lend money to the issuer. The issuer promises to pay you periodic interest (the coupon) and return the principal (face value) at maturity. Bond prices and interest rates are inversely related. When interest rates rise, existing bonds with lower coupon rates become less attractive, and their prices fall. When interest rates fall, existing bonds become more attractive, and their prices rise.

This inverse relationship between bond prices and interest rates is how monetary policy reaches the rest of the economy. When the central bank buys bonds (expansionary monetary policy), it increases demand for bonds. Their prices rise and interest rates fall. When it sells bonds (contractionary monetary policy), it increases the supply of bonds, which lowers their prices and raises interest rates.

Stocks represent ownership shares in a company. Stockholders may receive dividends (a share of profits), and they can profit when the stock's price rises (capital gains). Over the long run, stocks generally offer higher returns than bonds, but they are riskier. Stock prices can be volatile, and companies can go bankrupt.

Key ideas: Financial assets include money, bonds, and stocks, each with different liquidity, risk, and return profiles. Bond prices and interest rates are inversely related. Central bank bond purchases raise bond prices and lower interest rates. Stocks offer higher returns but greater risk than bonds.

4.2 Nominal vs. Real Interest Rates

The nominal interest rate is the stated rate of interest on a loan or financial asset, the rate you see advertised by a bank. The real interest rate adjusts the nominal rate for inflation, so it reflects the true cost of borrowing and the true return on saving. The Fisher equation expresses this relationship: Real Interest Rate = Nominal Interest Rate - Inflation Rate.

The difference matters enormously for economic decisions. Say a bank offers a 5 percent nominal interest rate on savings but inflation is 3 percent; the real return is then only 2 percent. Your money grows, but its purchasing power increases by only 2 percent. Now suppose inflation were 6 percent: the real interest rate would be negative 1 percent. Your savings would actually lose purchasing power despite earning nominal interest.

Borrowers care about real interest rates because those rates set the true cost of borrowing. If you borrow at 7 percent nominal but inflation is 4 percent, the real cost of borrowing is only 3 percent. You're repaying the loan with dollars that are worth less than when you borrowed them. This is why unanticipated inflation benefits borrowers at the expense of lenders.

The real interest rate is the key variable for investment decisions. Firms compare the real interest rate (the real cost of borrowing) with the expected real return on investment projects. Lower real interest rates stimulate investment, because more projects become profitable, and higher real interest rates discourage it. Monetary policy affects the economy mainly through its impact on real interest rates.

Key ideas: Nominal interest rate is the stated rate; real interest rate adjusts for inflation. Real Interest Rate = Nominal Interest Rate - Inflation Rate (Fisher equation). Real interest rates determine the true cost of borrowing and return on saving. Investment decisions depend on real interest rates: lower real rates stimulate investment.

4.3 Definition, Measurement, and Functions of Money

Money is anything widely accepted as a medium of exchange. It has three functions. As a medium of exchange, it makes transactions easier by removing the need for barter. As a unit of account, it gives a common measure for expressing the value of goods and services. As a store of value, it can be held and used to make purchases in the future, though inflation erodes this function.

Money is measured in two main categories, from narrow to broad. M1 is the most liquid money, meaning it can be spent right away: cash in circulation, checking deposits (demand deposits), and traveler's checks. M2 is everything in M1 plus "near-money," which usually has to be moved into cash or checking before you can spend it: savings deposits, small time deposits (CDs under $100,000), and money market mutual funds. M2 is the more commonly used measure of the money supply. Most textbooks still use these definitions, so use them on the exam. (Since 2020, the Federal Reserve has also counted savings deposits in M1, which is why real-world M1 numbers look much bigger.)

To work well as money, something should have several characteristics. It needs durability, so it doesn't deteriorate quickly, and portability, so it's easy to carry. It needs divisibility, so it can be broken into smaller units, and uniformity, so each unit is identical. It needs a limited supply, with its quantity controlled to maintain value. Finally, it needs acceptability: people must be willing to take it in exchange for goods and services.

The difference between commodity money and fiat money is important. Commodity money has intrinsic value, like gold coins. Fiat money has value because the government declares it legal tender, like modern paper currency. Nearly all modern money is fiat money. It has no intrinsic value but is accepted because people trust the issuing government and because the law requires accepting it for debts.

Key ideas: Money is a medium of exchange, unit of account, and store of value. M1 is the most liquid measure (cash + checking deposits); M2 adds savings and other near-money. Effective money requires durability, portability, divisibility, uniformity, limited supply, and acceptability. Modern money is fiat money, valued by government decree and public trust, not intrinsic worth.

4.4 Banking and the Expansion of the Money Supply

Banks create money through fractional reserve banking. They are required to hold only a fraction of their deposits as reserves and can lend out the rest. That fraction is the required reserve ratio, which the central bank sets. When a bank makes a loan, it creates a new deposit in the borrower's account, and this is new money that did not exist before. The borrower spends the loan, and the recipient deposits it in another bank. That bank then lends out a fraction of the deposit, creating more money, and so on.

The money multiplier sets the maximum amount of new money the banking system can create from an initial deposit. The simple money multiplier = 1 / Required Reserve Ratio (RRR). If the RRR is 10 percent (0.10), the money multiplier is 10. A $1,000 initial deposit can then potentially generate up to $10,000 in total deposits (and thus money supply) through the banking system.

The actual money multiplier is usually smaller than the simple one. Banks may hold excess reserves, meaning reserves beyond the required minimum. Some money also "leaks" out of the banking system as cash the public holds instead of depositing it in banks.

A bank's balance sheet shows assets (reserves plus loans) and liabilities (deposits). When the central bank changes the reserve requirement, it directly affects how much banks can lend. Lowering the reserve requirement increases the money multiplier and allows more lending (expansionary). Raising it decreases the multiplier and restricts lending (contractionary).

Key ideas: Fractional reserve banking allows banks to create money by lending out deposits beyond required reserves. The simple money multiplier = 1 / Required Reserve Ratio. A $1,000 deposit with a 10% reserve requirement can create up to $10,000 in total deposits. The actual multiplier is smaller due to excess reserves and cash leakage.

4.5 The Money Market

The money market model shows how the supply of money and the demand for money interact to determine the nominal interest rate. The central bank (the Federal Reserve in the U.S.) sets the money supply. On the graph, it is a vertical line, since it does not change with the interest rate. The demand for money slopes downward. Holding money means giving up the interest you could earn on assets like bonds, and that is its opportunity cost. At higher interest rates this opportunity cost is greater, so people hold less money. At lower interest rates the opportunity cost is lower, so people hold more.

The demand for money has three parts. Transactions demand is money needed for everyday purchases, and it rises with GDP and the price level. Precautionary demand is money held for unexpected expenses. Speculative demand is money held to take advantage of future investment opportunities. It increases when people expect interest rates to rise and bond prices to fall.

The money market is in equilibrium where money supply equals money demand, which sets the nominal interest rate. If the interest rate is above equilibrium, the quantity of money supplied exceeds the quantity demanded. People hold more money than they want, so they use the excess to buy bonds. That drives bond prices up and interest rates down toward equilibrium. If the interest rate is below equilibrium, the quantity demanded exceeds supply. People sell bonds to get more cash, which drives bond prices down and interest rates up.

Changes in the money supply shift the supply curve. An increase in the money supply (expansionary monetary policy) shifts the supply curve rightward and lowers the interest rate. A decrease (contractionary policy) shifts it leftward and raises the interest rate. Changes in GDP or the price level shift the demand curve.

Key ideas: The money supply is vertical (set by the central bank); money demand slopes downward. Equilibrium determines the nominal interest rate. Excess money supply leads to bond purchases, raising bond prices and lowering interest rates. Central bank increases in money supply lower interest rates; decreases raise them.

4.6 Monetary Policy

Monetary policy is the central bank's use of its tools to influence the money supply and interest rates. Its macroeconomic objectives are stable prices, full employment, and economic growth. In the United States, the Federal Reserve (the Fed) conducts monetary policy with three main tools.

Open market operations (OMOs) are the most commonly used tool. When the Fed buys government bonds on the open market, it pays with newly created money, so bank reserves and the money supply rise and interest rates fall (expansionary). When the Fed sells bonds, it takes money out of circulation, so bank reserves and the money supply fall and interest rates rise (contractionary).

The discount rate is the interest rate the Fed charges commercial banks for short-term loans. Lowering it makes borrowing cheaper for banks, which encourages them to lend more and increases the money supply (expansionary). Raising the discount rate discourages borrowing and reduces the money supply (contractionary).

The reserve requirement is the fraction of deposits banks must hold as reserves. Lowering it lets banks lend more, which increases the money multiplier and the money supply (expansionary). Raising it forces banks to hold more reserves, which reduces lending and the money supply (contractionary). Changes to the reserve requirement are rare because their effects are large and disruptive. In March 2020 the Federal Reserve set the requirement to zero, and it now steers interest rates mainly through the interest it pays on reserves.

The federal funds rate, the interest rate banks charge each other for overnight loans of reserves, is the Fed's primary target. The Fed uses open market operations to push the federal funds rate toward its target level. That rate then influences other interest rates throughout the economy.

Key ideas: The Fed uses open market operations, the discount rate, and the reserve requirement to conduct monetary policy. Buying bonds increases the money supply and lowers interest rates (expansionary). Selling bonds decreases the money supply and raises interest rates (contractionary). The federal funds rate is the primary policy target, influenced through open market operations.

4.7 The Loanable Funds Market

The loanable funds market model shows how the supply of savings (loanable funds) and the demand for borrowing interact to determine the real interest rate. The supply of loanable funds comes from the savings of households, firms, governments (if they run a surplus), and foreign investors. The supply curve slopes upward, because higher real interest rates give people more reason to save. The demand for loanable funds comes from borrowers. These include firms investing in capital, households buying homes, and governments financing deficits. The demand curve slopes downward, because higher real interest rates make borrowing more expensive and reduce the quantity demanded.

Equilibrium in the loanable funds market sets the real interest rate and the quantity of funds borrowed and lent. Changes in saving behavior shift the supply curve. An increase in savings shifts supply rightward and lowers the real interest rate. It could come from a cultural shift toward thriftiness or from larger foreign capital inflows. Changes in investment demand shift the demand curve. An increase in business optimism or technological opportunities shifts demand rightward and raises the real interest rate.

Government budget deficits increase the demand for loanable funds, since the government borrows to finance the deficit. The demand curve shifts rightward, and the real interest rate rises. This higher rate crowds out private investment. Some investment projects that would have been profitable at the lower rate are no longer worth doing. This is the crowding-out effect, a key limit of expansionary fiscal policy.

The loanable funds market differs from the money market in important ways. The money market determines the nominal interest rate, and the central bank's monetary policy influences it. The loanable funds market determines the real interest rate. Saving and investment behavior, government borrowing, and international capital flows influence it.

Key ideas: The loanable funds market determines the real interest rate through the interaction of savings (supply) and borrowing (demand). Government deficits increase demand for loanable funds, raising real interest rates and crowding out private investment. Increased savings lower real interest rates and stimulate investment. The loanable funds market determines real interest rates; the money market determines nominal rates.

Unit 5 – Long-Run Consequences of Stabilization Policies

5.1 Fiscal and Monetary Policy Actions in the Short Run

Fiscal and monetary policies are the two main tools governments use to stabilize the economy in the short run. They work through different mechanisms, but both aim to shift aggregate demand and close output gaps, the distance between actual output and potential GDP.

In a recession (recessionary gap), expansionary fiscal policy (more government spending or tax cuts) increases AD directly. At the same time, expansionary monetary policy increases the money supply. The Fed can do this by buying bonds, lowering the discount rate, or reducing reserve requirements. The larger money supply lowers interest rates in the money market, which stimulates investment and consumption and shifts AD rightward. Used together, these policies can be powerful against recessions.

In an inflationary gap, contractionary fiscal policy (less government spending or tax increases) decreases AD. Contractionary monetary policy decreases the money supply by selling bonds, raising the discount rate, or increasing reserve requirements. Interest rates rise, investment and consumption fall, and AD shifts leftward.

Choosing between fiscal and monetary policy involves trade-offs. Monetary policy is more flexible, since the Fed can act quickly without legislative approval. It works with a lag, though, because interest rate changes take time to affect spending. Fiscal policy can be targeted, with spending directed at specific sectors or populations, but it faces legislative lags and political constraints. Both policies have limits. Crowding out may offset fiscal policy. Monetary policy may be ineffective in a liquidity trap, when interest rates are already near zero and cannot be lowered further.

Key ideas: Expansionary fiscal and monetary policy fight recessions by shifting AD rightward. Contractionary policies fight inflation by shifting AD leftward. Monetary policy is flexible but works with lags; fiscal policy can be targeted but faces political constraints. Both have limitations: crowding out for fiscal policy, the liquidity trap for monetary policy.

5.2 The Phillips Curve

The Phillips curve illustrates the short-run trade-off between inflation and unemployment. In the short run, when unemployment falls below the natural rate during an expansion, inflation tends to rise. Tight labor markets push wages up, which raises costs and prices. When unemployment rises above the natural rate during a recession, inflation tends to fall. Slack labor markets put downward pressure on wages and prices. The short-run Phillips curve (SRPC) slopes downward to show this inverse relationship.

Expansionary policies that reduce unemployment also tend to raise inflation, a move up and to the left along the SRPC. Contractionary policies that reduce inflation also tend to raise unemployment, a move down and to the right along the SRPC. In the short run, policymakers face a trade-off between these two goals.

The long-run Phillips curve (LRPC) is vertical at the natural rate of unemployment. In the long run, then, there is no trade-off between inflation and unemployment. Once expectations adjust, any rate of inflation is consistent with the natural rate of unemployment. Suppose the government tries to hold unemployment below the natural rate permanently through expansionary policy. Inflation will accelerate as workers and firms raise their expectations of inflation. The expectations-augmented Phillips curve models this process.

Supply shocks shift the SRPC. A negative supply shock (like an oil price increase) shifts the SRPC rightward and upward. Inflation and unemployment then rise at the same time (stagflation). A positive supply shock shifts the SRPC leftward and downward, so both inflation and unemployment fall.

Key ideas: The short-run Phillips curve shows an inverse relationship between inflation and unemployment. The long-run Phillips curve is vertical at the natural rate: no permanent trade-off exists. Attempts to keep unemployment below the natural rate permanently cause accelerating inflation. Supply shocks shift the short-run Phillips curve.

5.3 Money Growth and Inflation

The quantity theory of money gives a framework for understanding how the money supply relates to the price level. The equation of exchange states M × V = P × Y, where M is the money supply. V is the velocity of money, the average number of times a dollar is spent in a year. P is the price level, and Y is real output.

Classical economists argue that velocity (V) and real output (Y) are relatively stable in the long run. If so, changes in the money supply (M) show up mainly as changes in the price level (P). In other words, increasing the money supply faster than the economy's productive capacity grows will cause inflation. This is the monetarist perspective, associated with Milton Friedman, who famously stated that "inflation is always and everywhere a monetary phenomenon."

In the long run, this relationship holds strongly. Countries that print money rapidly experience high inflation or hyperinflation (Zimbabwe, Venezuela). In the short run, changes in the money supply can also affect real output, as the AD-AS model shows. That is because prices and wages are sticky and do not adjust right away.

For monetary policy, the lesson is that the central bank should manage the money supply carefully to keep prices stable. Too much money growth causes inflation, and too little can cause deflation or recession. Many central banks make a low, stable inflation rate (typically around 2 percent) their primary objective. They use interest rate adjustments to keep the money supply growing at a rate consistent with stable prices and sustainable economic growth.

Key ideas: The equation of exchange: M × V = P × Y. If velocity and real output are stable, money supply growth determines inflation. Friedman: "Inflation is always and everywhere a monetary phenomenon." Central banks target low, stable inflation by managing money supply growth through interest rate policy.

5.4 Government Deficits and the National Debt

A government budget deficit occurs when government spending exceeds tax revenue in a given year. The government finances deficits by borrowing. It issues Treasury bonds, which domestic and foreign investors buy. The national debt is the total of all past deficits minus surpluses, meaning the total amount the government owes.

Deficits tend to grow during recessions, when tax revenue falls and spending on automatic stabilizers rises. They also grow during expansionary fiscal policy. Surpluses tend to occur during economic expansions, when tax revenue rises and spending on safety nets falls. Structural deficits persist regardless of the business cycle. They come from a built-in mismatch between spending commitments and revenue.

The national debt has both domestic and international components. When the debt is held domestically, interest payments are transfers from taxpayers to bondholders within the country. When foreign investors hold it, interest payments are a transfer of wealth abroad. A large and growing national debt can crowd out private investment by raising demand for loanable funds and pushing up real interest rates. It can also burden future generations, who must service the debt, and it may undermine confidence in the government's fiscal sustainability.

However, some economists argue that government borrowing can be productive. That is the case if the funds go into infrastructure, education, or other public goods that raise future economic growth enough to generate the extra tax revenue to service the debt. The debt-to-GDP ratio is a more meaningful measure than the absolute debt level. It reflects the government's ability to service its obligations relative to the size of the economy.

Key ideas: A deficit is annual spending exceeding revenue; the national debt is the cumulative total of past deficits. Deficits rise in recessions and with expansionary fiscal policy. Large debts can crowd out private investment and burden future generations. The debt-to-GDP ratio is more meaningful than the absolute debt level.

5.5 Crowding Out

Crowding out occurs when government borrowing to finance deficit spending raises interest rates, which in turn reduces (or "crowds out") private investment. This partly offsets the stimulus from fiscal policy, so GDP rises by less than the multiplier would predict.

The mechanism works through the loanable funds market. When the government runs a deficit, its demand for loanable funds rises, shifting the demand curve rightward. That raises the real interest rate. At higher interest rates, some private investment projects are no longer profitable, so firms invest less. The drop in private investment partly offsets the increase in government spending and shrinks the net stimulus.

How much crowding out occurs depends on several factors. In a deep recession with many idle resources, crowding out may be minimal because banks have excess reserves, interest rates are already low, and private investment demand is weak. Near full employment, crowding out can be substantial, because resources are scarce and competition for loanable funds is intense. The central bank can also accommodate the fiscal expansion by increasing the money supply, which keeps interest rates from rising. That avoids crowding out and is called monetary accommodation.

In complete crowding out, private investment falls by exactly the amount of the government spending increase, leaving total output unchanged. This is an extreme case, which classical economists might argue occurs at full employment. Most economists consider partial crowding out more realistic. Fiscal policy then works, but it is less powerful than simple multiplier calculations suggest.

Key ideas: Crowding out occurs when government borrowing raises interest rates and reduces private investment. It works through the loanable funds market: deficit spending increases demand for funds, raising real interest rates. Crowding out is larger near full employment and smaller in deep recessions. Monetary accommodation can prevent crowding out by keeping interest rates stable.

5.6 Economic Growth

Economic growth is the sustained increase in an economy's ability to produce goods and services over time. It is measured by increases in real GDP or real GDP per capita. On a graph, growth appears as a rightward shift of the LRAS curve and an outward shift of the PPC. It is the most important determinant of long-run improvements in living standards.

Growth comes from more resources (more workers, more capital, more land) and from better quality and productivity of resources. Productivity growth (more output per unit of input) is the most important driver of sustained economic growth. Productivity rises with investment in physical capital (machinery, infrastructure) and human capital (education, training, health). It also rises with technological innovation (new products, processes, and methods) and institutional quality (property rights, rule of law, efficient markets, low corruption).

The rule of 70 gives a quick estimate of how long it takes for a variable to double at a given growth rate: Years to double ≈ 70 / Annual growth rate (%). An economy growing at 2 percent per year doubles its real GDP in approximately 35 years. At 7 percent, it doubles in 10 years. Small differences in growth rates compound into enormous differences over time.

Key ideas: Economic growth is a sustained increase in productive capacity, shifting LRAS rightward and PPC outward. Productivity growth is the primary driver, and it comes from physical capital, human capital, technology, and institutions. The rule of 70: years to double ≈ 70 / growth rate. Small differences in growth rates produce large differences in living standards over time.

5.7 Public Policy and Economic Growth

Governments can promote economic growth through policies that increase the quantity and quality of productive resources. Investment in education and training builds human capital, because a more skilled, knowledgeable workforce is more productive. Spending on infrastructure (roads, bridges, ports, broadband networks) reduces transaction costs and makes economic activity more efficient. Support for research and development encourages technological innovation. That support can come through direct government funding, tax credits, and patent protection.

Institutional policies also matter. Protecting property rights and enforcing contracts encourages investment, because entrepreneurs know they can keep the returns from their efforts. A stable macroeconomic environment (low inflation, sustainable fiscal policy) reduces uncertainty and encourages long-term planning. Open trade policies let countries benefit from specialization and gain access to global markets and technologies.

Supply-side economics favors policies that increase aggregate supply rather than aggregate demand. One key supply-side policy is tax cuts, especially on investment and capital gains, meant to encourage saving, investment, and entrepreneurship. Another is deregulation, which reduces government rules that raise business costs. A third is reducing government spending to free resources for the private sector. Critics argue that supply-side tax cuts mainly benefit the wealthy. They may also increase deficits without producing enough growth to make up the lost revenue.

The trade-off between consumption now and growth later is a recurring theme. Policies that increase investment (in physical capital, human capital, or technology) require giving up some consumption now, but they produce higher output later. Societies that invest more tend to grow faster, but the benefits are not always shared equally.

Key ideas: Governments promote growth through education, infrastructure, R&D support, and institutional quality. Protecting property rights, enforcing contracts, and maintaining macroeconomic stability encourage investment. Supply-side policies emphasize tax cuts, deregulation, and reduced government spending to boost aggregate supply. Growth requires trade-offs between present consumption and future productive capacity.

Unit 6 – Open Economy – International Trade and Finance

6.1 Balance of Payments Accounts

The balance of payments (BOP) records all economic transactions between a country's residents and the rest of the world during a given period. It has two main accounts: the current account and the capital (financial) account. By definition, the balance of payments must balance: the current account balance plus the capital account balance equals zero.

The current account records flows of goods, services, income, and unilateral transfers (payments made without anything received in return). Its largest component is the trade balance, which is exports minus imports of goods and services. A trade surplus (exports exceed imports) adds to it, and a trade deficit (imports exceed exports) subtracts from it. The current account also includes net income from abroad (wages, investment income) and net transfers (foreign aid, remittances).

The capital (financial) account records flows of financial assets (investments) between countries. It includes foreign direct investment (FDI), such as a company building a factory abroad. It also includes portfolio investment (purchases of foreign stocks and bonds) and changes in official reserve assets (central bank holdings of foreign currencies). When foreigners invest in the United States by buying U.S. bonds or building factories, that is a capital account inflow (surplus). When Americans invest abroad, it is an outflow (deficit).

The key relationship is that a current account deficit must be offset by a capital account surplus, and vice versa. Suppose the United States imports more than it exports, a current account deficit. It must finance that deficit by attracting foreign investment, which is a capital account surplus. Foreigners must be willing to hold U.S. assets (dollars, bonds, stocks, real estate). So a country running a persistent trade deficit is also a net borrower from the rest of the world.

Key ideas: The balance of payments includes the current account (goods, services, income, transfers) and the capital account (financial assets). The current account plus the capital account must equal zero. A current account deficit must be financed by a capital account surplus (foreign investment inflows). Persistent trade deficits mean a country is a net borrower from abroad.

6.2 Exchange Rates and the Foreign Exchange Market

An exchange rate is the price of one currency in terms of another. Under a flexible (floating) exchange rate system, supply and demand in the foreign exchange market set exchange rates. Under a fixed exchange rate system, the government or central bank sets the exchange rate and intervenes in the market to hold it there.

When a currency appreciates, or gains value against other currencies, domestic goods become more expensive for foreigners, so exports fall. Foreign goods become cheaper for domestic consumers, so imports rise, and the trade balance worsens. When a currency depreciates, or loses value, domestic goods become cheaper for foreigners and exports rise. Foreign goods become more expensive at home, so imports fall, and the trade balance improves.

Demand for a currency comes from foreigners who want to buy that country's goods, services, or financial assets. The supply of a currency comes from domestic residents who want to buy foreign goods, services, or assets. Take the foreign exchange market for dollars. Demand comes from foreigners who want dollars to buy American goods or invest in U.S. assets. Supply comes from Americans who want foreign currencies to buy imports or invest abroad.

Several factors shift currency demand and supply. Relative interest rates are one. Higher domestic interest rates attract foreign investment, which raises demand for the currency and makes it appreciate. Relative income levels are another. Higher domestic income raises demand for imports, which increases the supply of domestic currency and makes it depreciate. Relative price levels matter too, since higher domestic inflation makes exports less competitive, and speculation and political stability also play a part.

Key ideas: Exchange rates are the price of one currency in terms of another. Appreciation makes exports more expensive and imports cheaper; depreciation does the opposite. Currency demand comes from foreigners buying domestic goods/assets; supply comes from domestic residents buying foreign goods/assets. Relative interest rates, income levels, inflation, and speculation affect exchange rates.

6.3 Effects of Changes in the Foreign Exchange Market on Net Exports

Changes in exchange rates affect net exports (exports minus imports), which are a component of aggregate demand. That creates important links between the foreign exchange market and the domestic economy.

When the domestic currency depreciates, exports become cheaper for foreigners, and imports become more expensive for domestic consumers. Exports rise and imports fall, which improves the trade balance and increases net exports. Since net exports are a component of AD, AD shifts rightward, raising real GDP and the price level. Depreciation is therefore expansionary.

When the domestic currency appreciates, exports become more expensive for foreigners, and imports become cheaper at home. Exports fall and imports rise, which worsens the trade balance and decreases net exports. AD shifts leftward, lowering real GDP and the price level. Appreciation is therefore contractionary.

These links connect monetary and fiscal policy to the foreign exchange market. Expansionary monetary policy lowers interest rates, which reduces foreign investment inflows. Demand for the domestic currency falls and the currency depreciates, so net exports rise, which reinforces the expansionary effect. Expansionary fiscal policy, by contrast, raises interest rates through crowding out, which attracts foreign investment. Demand for the domestic currency rises and the currency appreciates, so net exports fall, which partly offsets the expansionary effect. This is another channel through which fiscal policy may be partly crowded out.

Key ideas: Currency depreciation increases net exports (expansionary); appreciation decreases net exports (contractionary). Exchange rate changes create a channel linking foreign exchange markets to aggregate demand. Expansionary monetary policy causes depreciation, reinforcing the stimulus through higher net exports. Expansionary fiscal policy can cause appreciation, partially offsetting the stimulus through lower net exports.

6.4 Real Interest Rates and International Capital Flows

Differences in real interest rates between countries drive international capital flows, and those flows in turn affect exchange rates, net exports, and the balance of payments. Capital flows from countries with lower real interest rates to countries with higher real interest rates, as investors seek the best return on their savings.

A country's real interest rate can rise because of contractionary monetary policy, expansionary fiscal policy, or increased demand for loanable funds. A higher rate attracts foreign investment. Foreign investors need domestic currency to buy domestic assets, so demand for the currency rises and it appreciates. The appreciation reduces net exports, because exports become more expensive and imports cheaper, and that partly offsets any domestic stimulus. It also produces a capital account surplus (foreign investment inflows) paired with a current account deficit (reduced net exports).

When a country's real interest rate falls, domestic and foreign investors look for higher returns elsewhere, which creates a capital outflow. The supply of domestic currency in foreign exchange markets rises, and the currency depreciates. Depreciation increases net exports, which gives the domestic economy some stimulus.

Because of these links, domestic economic policies have international consequences, and international conditions affect domestic outcomes. A country cannot independently control its interest rate, exchange rate, and capital flows all at once. This is known as the "impossible trinity" or "trilemma" of international finance. Countries must choose among exchange rate stability, free capital movement, and independent monetary policy. They can achieve at most two of the three.

Key ideas: Higher real interest rates attract foreign capital, causing currency appreciation and reduced net exports. Lower real interest rates cause capital outflows, currency depreciation, and increased net exports. Domestic monetary and fiscal policies have international spillover effects through capital flows and exchange rates. The "impossible trinity" means countries cannot simultaneously control interest rates, exchange rates, and capital flows.
`


export const MACROECONOMICS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Macroeconomics',
  units: parseRawOverview(RAW_MACROECONOMICS),
  features: { latex: false, codeExamples: false },
}


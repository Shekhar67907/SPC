import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryAxis, VictoryLabel } from 'victory-native';

interface ControlChartsProps {
  xBarData: { x: number; y: number }[];
  rangeData: { x: number; y: number }[];
  limits: {
    xBarUcl: number;
    xBarLcl: number;
    xBarMean: number;
    rangeUcl: number;
    rangeLcl: number;
    rangeMean: number;
  };
<<<<<<< HEAD
  sampleSize: number;
}

// Constants for different sample sizes
const constants = {
  1: { A2: 1.880, D3: 0, D4: 3.267, d2: 1.128 },
  2: { A2: 1.023, D3: 0, D4: 3.267, d2: 1.128 },
  3: { A2: 0.729, D3: 0, D4: 2.575, d2: 1.693 },
  4: { A2: 0.577, D3: 0, D4: 2.282, d2: 2.059 },
  5: { A2: 0.483, D3: 0, D4: 2.115, d2: 2.326 }
} as const;

export function ControlCharts({ xBarData, rangeData, limits, sampleSize }: ControlChartsProps) {
  // Calculate width based on number of data points with more spacing
  const chartWidth = Math.max(400, xBarData.length * 60);

  // Get constants for current sample size, defaulting to size 1 if invalid
  const { A2, D3, D4, d2 } = constants[sampleSize as keyof typeof constants] || constants[1];

  // Calculate padding to ensure control limits are visible
  const yPadding = {
    xBar: Math.abs(limits.xBarUcl - limits.xBarLcl) * 0.15,
    range: Math.abs(limits.rangeUcl - limits.rangeLcl) * 0.15
  };
=======
}

export function ControlCharts({ xBarData, rangeData, limits }: ControlChartsProps) {
  // Calculate width based on number of data points
  const chartWidth = Math.max(350, xBarData.length * 50); // Minimum 350px or 50px per point
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
<<<<<<< HEAD
          <Text style={styles.sampleSize}>Sample Size: {sampleSize}</Text>
          <Text style={styles.formula}>
            XBar Chart (A2={A2}): UCL = X̄ + (A2 × R̄) LCL = X̄ - (A2 × R̄)
=======
          <Text style={styles.sampleSize}>Sample Size: 1</Text>
          <Text style={styles.formula}>
            XBar Chart UCL = X̄ + (A2 × R̄) LCL = X̄ - (A2 × R̄)
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
          </Text>
        </View>

        <View style={styles.limitsContainer}>
          <View style={[styles.limitBox, styles.uclBox]}>
            <Text style={styles.limitLabel}>UCL</Text>
            <Text style={styles.limitValue}>{limits.xBarUcl.toFixed(3)}</Text>
          </View>
          <View style={[styles.limitBox, styles.meanBox]}>
            <Text style={styles.limitLabel}>X̄ (Mean)</Text>
            <Text style={styles.limitValue}>{limits.xBarMean.toFixed(3)}</Text>
          </View>
          <View style={[styles.limitBox, styles.lclBox]}>
            <Text style={styles.limitLabel}>LCL</Text>
            <Text style={styles.limitValue}>{limits.xBarLcl.toFixed(3)}</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={{ width: chartWidth }}>
            <VictoryChart
<<<<<<< HEAD
              padding={{ top: 50, bottom: 50, left: 60, right: 30 }}
              height={300}
              width={chartWidth}
              domain={{
                y: [
                  Math.min(limits.xBarLcl, Math.min(...xBarData.map(d => d.y))) - yPadding.xBar,
                  Math.max(limits.xBarUcl, Math.max(...xBarData.map(d => d.y))) + yPadding.xBar
                ]
              }}
=======
              padding={{ top: 40, bottom: 50, left: 50, right: 20 }}
              height={250}
              width={chartWidth}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
            >
              <VictoryAxis
                tickFormat={(t) => `G${t}`}
                style={{
                  grid: { stroke: '#E5E7EB', strokeDasharray: '5,5' },
<<<<<<< HEAD
                  tickLabels: { fontSize: 12, padding: 5 }
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  grid: { stroke: '#E5E7EB', strokeDasharray: '5,5' },
<<<<<<< HEAD
                  tickLabels: { fontSize: 12, padding: 5 }
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                }}
              />
              <VictoryLine
                data={xBarData}
                style={{ data: { stroke: '#3B82F6', strokeWidth: 2 } }}
              />
              <VictoryScatter
                data={xBarData}
<<<<<<< HEAD
                size={6}
=======
                size={5}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                style={{ data: { fill: '#3B82F6' } }}
              />
              <VictoryLine
                y={() => limits.xBarUcl}
<<<<<<< HEAD
                style={{ 
                  data: { 
                    stroke: '#EF4444', 
                    strokeWidth: 3,
                    strokeDasharray: '8,4' 
                  } 
                }}
              />
              <VictoryLine
                y={() => limits.xBarMean}
                style={{ 
                  data: { 
                    stroke: '#8B5CF6', 
                    strokeWidth: 2.5 
                  } 
                }}
              />
              <VictoryLine
                y={() => limits.xBarLcl}
                style={{ 
                  data: { 
                    stroke: '#EF4444', 
                    strokeWidth: 3,
                    strokeDasharray: '8,4' 
                  } 
                }}
=======
                style={{ data: { stroke: '#EF4444', strokeDasharray: '5,5' } }}
              />
              <VictoryLine
                y={() => limits.xBarMean}
                style={{ data: { stroke: '#8B5CF6', strokeWidth: 2 } }}
              />
              <VictoryLine
                y={() => limits.xBarLcl}
                style={{ data: { stroke: '#EF4444', strokeDasharray: '5,5' } }}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
              />
            </VictoryChart>
          </View>
        </ScrollView>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
<<<<<<< HEAD
          <Text style={styles.sampleSize}>Range Chart</Text>
          <Text style={styles.formula}>
            Range Chart (D3={D3}, D4={D4}): UCL = D4 × R̄ LCL = D3 × R̄
          </Text>
=======
          <Text style={styles.sampleSize}>Sample Size: 2</Text>
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
        </View>

        <View style={styles.limitsContainer}>
          <View style={[styles.limitBox, styles.uclBox]}>
            <Text style={styles.limitLabel}>UCL</Text>
            <Text style={styles.limitValue}>{limits.rangeUcl.toFixed(3)}</Text>
          </View>
          <View style={[styles.limitBox, styles.meanBox]}>
            <Text style={styles.limitLabel}>R̄ (Mean)</Text>
            <Text style={styles.limitValue}>{limits.rangeMean.toFixed(3)}</Text>
          </View>
          <View style={[styles.limitBox, styles.lclBox]}>
            <Text style={styles.limitLabel}>LCL</Text>
            <Text style={styles.limitValue}>{limits.rangeLcl.toFixed(3)}</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={{ width: chartWidth }}>
            <VictoryChart
<<<<<<< HEAD
              padding={{ top: 50, bottom: 50, left: 60, right: 30 }}
              height={300}
              width={chartWidth}
              domain={{
                y: [
                  Math.min(limits.rangeLcl, Math.min(...rangeData.map(d => d.y))) - yPadding.range,
                  Math.max(limits.rangeUcl, Math.max(...rangeData.map(d => d.y))) + yPadding.range
                ]
              }}
=======
              padding={{ top: 40, bottom: 50, left: 50, right: 20 }}
              height={250}
              width={chartWidth}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
            >
              <VictoryAxis
                tickFormat={(t) => `G${t}`}
                style={{
                  grid: { stroke: '#E5E7EB', strokeDasharray: '5,5' },
<<<<<<< HEAD
                  tickLabels: { fontSize: 12, padding: 5 }
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  grid: { stroke: '#E5E7EB', strokeDasharray: '5,5' },
<<<<<<< HEAD
                  tickLabels: { fontSize: 12, padding: 5 }
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                }}
              />
              <VictoryLine
                data={rangeData}
                style={{ data: { stroke: '#3B82F6', strokeWidth: 2 } }}
              />
              <VictoryScatter
                data={rangeData}
<<<<<<< HEAD
                size={6}
=======
                size={5}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
                style={{ data: { fill: '#3B82F6' } }}
              />
              <VictoryLine
                y={() => limits.rangeUcl}
<<<<<<< HEAD
                style={{ 
                  data: { 
                    stroke: '#EF4444', 
                    strokeWidth: 3,
                    strokeDasharray: '8,4' 
                  } 
                }}
              />
              <VictoryLine
                y={() => limits.rangeMean}
                style={{ 
                  data: { 
                    stroke: '#8B5CF6', 
                    strokeWidth: 2.5 
                  } 
                }}
              />
              <VictoryLine
                y={() => limits.rangeLcl}
                style={{ 
                  data: { 
                    stroke: '#EF4444', 
                    strokeWidth: 3,
                    strokeDasharray: '8,4' 
                  } 
                }}
=======
                style={{ data: { stroke: '#EF4444', strokeDasharray: '5,5' } }}
              />
              <VictoryLine
                y={() => limits.rangeMean}
                style={{ data: { stroke: '#8B5CF6', strokeWidth: 2 } }}
              />
              <VictoryLine
                y={() => limits.rangeLcl}
                style={{ data: { stroke: '#EF4444', strokeDasharray: '5,5' } }}
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
              />
            </VictoryChart>
          </View>
        </ScrollView>
<<<<<<< HEAD

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#3B82F6' }]} />
            <Text style={styles.legendText}>Data Points</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#EF4444' }]} />
            <Text style={styles.legendText}>Control Limits</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#8B5CF6' }]} />
            <Text style={styles.legendText}>Center Line</Text>
          </View>
        </View>
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
<<<<<<< HEAD
    marginBottom: 24,
=======
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
<<<<<<< HEAD
    padding: 20,
=======
    padding: 16,
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sampleSize: {
<<<<<<< HEAD
    fontSize: 16,
    fontWeight: '600',
=======
    fontSize: 14,
    fontWeight: '500',
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
    color: '#374151',
  },
  formula: {
    fontSize: 12,
    color: '#6B7280',
  },
  limitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
<<<<<<< HEAD
    gap: 12,
=======
    gap: 8,
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
  },
  limitBox: {
    flex: 1,
    borderRadius: 8,
<<<<<<< HEAD
    padding: 12,
=======
    padding: 8,
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
    alignItems: 'center',
  },
  uclBox: {
    backgroundColor: '#FEE2E2',
  },
  meanBox: {
    backgroundColor: '#E0E7FF',
  },
  lclBox: {
    backgroundColor: '#FEE2E2',
  },
  limitLabel: {
<<<<<<< HEAD
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    fontWeight: '500',
  },
  limitValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#4B5563',
  },
=======
    fontSize: 12,
    color: '#374151',
    marginBottom: 4,
  },
  limitValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
>>>>>>> c4bb74a3d33d39d271ff6602ee72fb378dd9b6a0
});
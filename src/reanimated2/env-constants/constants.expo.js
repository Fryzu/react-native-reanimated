import { version as ReaVersion, name } from '../../../package.json';
import ExpoDependencies from 'expo/bundledNativeModules.json';

const enviromentSpecificConstants = {
  REANIMATED_JS_VERSION: ReaVersion,
  EXPO_NATIVE_REANIMATED_VERSION: ExpoDependencies[name],
};

export default enviromentSpecificConstants;

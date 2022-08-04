// TODO: Types
export default function reduceChannels(acc: any, channel: any) {
    if (channel.category?.id) {
      if (!acc[channel.category.id]) {
        acc[channel.category.id] = {
          name: channel.category.name,
          channels: [],
          branches: [],
        };
      }
      acc[channel.category.id].channels.push(channel);
    } else {
      if (!acc["default"]) {
        acc["default"] = { name: "default", channels: [], branches: [] };
      }
      acc.default.channels.push(channel);
    }
    return acc;
  }